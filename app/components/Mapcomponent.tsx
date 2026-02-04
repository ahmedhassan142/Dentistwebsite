// components/DentalClinicMap.tsx
'use client'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { MapPin, Phone, Navigation } from 'lucide-react'

// Fix for default icons in Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/leaflet/images/marker-icon-2x.png',
  iconUrl: '/leaflet/images/marker-icon.png',
  shadowUrl: '/leaflet/images/marker-shadow.png',
})

interface DentalClinicMapProps {
  position: [number, number]
  zoom?: number
  clinicName?: string
  address?: string
  phone?: string
  emergencyPhone?: string
}

const DentalClinicMap = ({ 
  position, 
  zoom = 16, 
  clinicName = "Elite Dental Clinic",
  address = "123 Dental Avenue, Medical District, CA 90210",
  phone = "(555) 123-4567",
  emergencyPhone = "(555) 123-4568"
}: DentalClinicMapProps) => {
  
  // Custom dental clinic icon
  const dentalIcon = L.divIcon({
    html: `<div style="background-color: #3b82f6; color: white; width: 48px; height: 48px; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 3px solid white; box-shadow: 0 2px 10px rgba(0,0,0,0.3);">
            <span style="font-size: 24px;">🦷</span>
          </div>`,
    iconSize: [48, 48],
    iconAnchor: [24, 48],
    popupAnchor: [0, -48],
    className: 'dental-marker'
  })

  return (
    <div className="w-full h-full rounded-lg overflow-hidden shadow-lg">
      <MapContainer
        center={position}
        zoom={zoom}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={true}
      >
        {/* OpenStreetMap Tile Layer */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {/* Dental Clinic Marker */}
        <Marker position={position} icon={dentalIcon}>
          <Popup>
            <div className="p-4 min-w-[250px]">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-xl">🦷</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-blue-700">{clinicName}</h3>
                  <p className="text-sm text-gray-600">Dental Clinic</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <MapPin className="w-4 h-4 text-gray-500 mt-1 mr-2 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">{address}</p>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-4 h-4 text-gray-500 mt-1 mr-2 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 text-sm">{phone}</p>
                    <p className="text-red-600 text-sm font-medium">{emergencyPhone} (Emergency)</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 space-y-2">
                <a 
                  href={`https://maps.google.com/?q=${encodeURIComponent(address)}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block bg-blue-500 hover:bg-blue-600 text-white text-center py-2 px-4 rounded-lg transition-colors text-sm flex items-center justify-center"
                >
                  <Navigation className="w-4 h-4 mr-2" />
                  Get Google Directions
                </a>
                <a 
                  href={`http://maps.apple.com/?daddr=${position[0]},${position[1]}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block bg-gray-800 hover:bg-black text-white text-center py-2 px-4 rounded-lg transition-colors text-sm flex items-center justify-center"
                >
                  <span className="mr-2">🍎</span>
                  Get Apple Directions
                </a>
              </div>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default DentalClinicMap