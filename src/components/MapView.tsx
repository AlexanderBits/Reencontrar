import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in Leaflet
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

interface MapViewProps {
  center?: [number, number];
  zoom?: number;
  markers?: Array<{
    position: [number, number];
    title: string;
    type: 'lost' | 'found';
  }>;
  onLocationSelect?: (lat: number, lng: number) => void;
  interactive?: boolean;
}

function LocationMarker({ onLocationSelect }: { onLocationSelect: (lat: number, lng: number) => void }) {
  const [position, setPosition] = React.useState<L.LatLng | null>(null);
  const map = useMapEvents({
    click(e) {
      setPosition(e.latlng);
      onLocationSelect(e.latlng.lat, e.latlng.lng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>Local selecionado</Popup>
    </Marker>
  );
}

export const MapView: React.FC<MapViewProps> = ({ 
  center = [-23.5505, -46.6333], // São Paulo default
  zoom = 13, 
  markers = [],
  onLocationSelect,
  interactive = true
}) => {
  return (
    <div className="w-full h-full min-h-[400px] border-2 border-black">
      <MapContainer 
        center={center} 
        zoom={zoom} 
        scrollWheelZoom={true}
        className="w-full h-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {markers.map((marker, idx) => (
          <Marker key={idx} position={marker.position}>
            <Popup>
              <div className="p-1">
                <p className="font-bold uppercase text-xs mb-1">{marker.type === 'lost' ? 'Perdido' : 'Encontrado'}</p>
                <p className="text-sm">{marker.title}</p>
              </div>
            </Popup>
          </Marker>
        ))}

        {interactive && onLocationSelect && (
          <LocationMarker onLocationSelect={onLocationSelect} />
        )}
      </MapContainer>
    </div>
  );
};
