"use client";

import { motion } from "framer-motion";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { MapPin, Phone, Mail } from "lucide-react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix default marker in react-leaflet
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
delete (L.Icon.Default.prototype as unknown)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// ================== LOCATIONS ==================
const locations = [
  {
    id: "bucuresti",
    lat: 44.4669,
    lng: 26.0946,
    name: "Sediul Central BDG MC",
    address: "Calea Dorobanți 32, Sector 1, București",
    phone: "+40 753 850 578",
    email: "office@bdgmotoclub.ro",
    schedule: {
      "Luni - Vineri": "18:00 - 22:00",
      Sâmbătă: "10:00 - 18:00",
      Duminică: "10:00 - 16:00",
    },
  },
  {
    id: "suceava",
    lat: 47.6514,
    lng: 26.2556,
    name: "Filiala BDG MC Suceava",
    address: "Strada Ștefan cel Mare 3, Suceava",
    phone: "+40 753 850 578",
    email: "office@bdgmotoclub.ro",
    schedule: {
      "Luni - Vineri": "18:00 - 21:00",
      Sâmbătă: "12:00 - 18:00",
      Duminică: "Închis",
    },
  },
];

export default function LocationPageContent() {
  return (
    <>
      <section className="from-background via-muted/20 to-background bg-linear-to-br pt-24 pb-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <h1 className="text-foreground mb-6 text-5xl font-bold md:text-6xl">
              Locații <span className="text-primary">Club</span>
            </h1>
            <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
              Descoperă sediul principal și filialele noastre din țară.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="moto-card h-[500px] overflow-hidden p-0">
                <MapContainer
                  center={[44.44887281595586, 26.099693254625503]} // București center
                  zoom={6}
                  className="h-full w-full"
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  {locations.map((loc) => (
                    <Marker key={loc.id} position={[loc.lat, loc.lng]}>
                      <Popup>
                        <div className="p-2 text-center">
                          <h3 className="mb-2 text-lg font-bold">{loc.name}</h3>
                          <p className="text-muted-foreground text-sm">
                            {loc.address}
                          </p>
                        </div>
                      </Popup>
                    </Marker>
                  ))}
                </MapContainer>
              </div>
            </motion.div>

            {/* Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {locations.map((loc) => (
                <div key={loc.id} className="moto-card space-y-6">
                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary flex h-12 w-12 shrink-0 items-center justify-center rounded-full">
                      <MapPin className="text-primary-foreground h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-foreground mb-2 text-lg font-bold">
                        {loc.name}
                      </h3>
                      <p className="text-muted-foreground">{loc.address}</p>
                    </div>
                  </div>

                  {/* Schedule */}
                  <div>
                    <h4 className="text-foreground text-md mb-2 font-bold">
                      Program
                    </h4>
                    <div className="space-y-1 text-sm">
                      {Object.entries(loc.schedule).map(([day, hours]) => (
                        <div
                          key={day}
                          className="text-muted-foreground flex justify-between"
                        >
                          <span>{day}:</span>
                          <span className="text-foreground font-medium">
                            {hours}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="text-primary h-5 w-5" />
                      <a
                        href={`tel:${loc.phone}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {loc.phone}
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="text-primary h-5 w-5" />
                      <a
                        href={`mailto:${loc.email}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {loc.email}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
