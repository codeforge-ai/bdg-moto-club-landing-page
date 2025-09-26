"use client";

import { motion } from "framer-motion";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for default markers in react-leaflet
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

const headquarters = {
  lat: 44.4268,
  lng: 26.1025,
  name: "Sediul Central Club Moto",
  address: "Strada Motocicliștilor 15, București",
  phone: "+40 721 234 567",
  email: "contact@clubmoto.ro",
  schedule: {
    "Luni - Vineri": "18:00 - 22:00",
    Sâmbătă: "10:00 - 18:00",
    Duminică: "10:00 - 16:00",
  },
};

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
              Găsește-ne sediul principal și descoperă unde ne întâlnim pentru
              aventurile noastre
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
                  center={[headquarters.lat, headquarters.lng]}
                  zoom={15}
                  className="h-full w-full"
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={[headquarters.lat, headquarters.lng]}>
                    <Popup>
                      <div className="p-2 text-center">
                        <h3 className="mb-2 text-lg font-bold">
                          {headquarters.name}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {headquarters.address}
                        </p>
                      </div>
                    </Popup>
                  </Marker>
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
              {/* Address Card */}
              <div className="moto-card">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary flex h-12 w-12 shrink-0 items-center justify-center rounded-full">
                    <MapPin className="text-primary-foreground h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-foreground mb-2 text-lg font-bold">
                      Adresa
                    </h3>
                    <p className="text-muted-foreground">
                      {headquarters.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Schedule Card */}
              <div className="moto-card">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary flex h-12 w-12 shrink-0 items-center justify-center rounded-full">
                    <Clock className="text-primary-foreground h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-foreground mb-3 text-lg font-bold">
                      Program
                    </h3>
                    <div className="space-y-2">
                      {Object.entries(headquarters.schedule).map(
                        ([day, hours]) => (
                          <div
                            key={day}
                            className="flex justify-between text-sm"
                          >
                            <span className="text-muted-foreground">
                              {day}:
                            </span>
                            <span className="text-foreground font-medium">
                              {hours}
                            </span>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Card */}
              <div className="moto-card">
                <div className="space-y-4">
                  <h3 className="text-foreground text-lg font-bold">Contact</h3>

                  <div className="flex items-center space-x-3">
                    <Phone className="text-primary h-5 w-5" />
                    <a
                      href={`tel:${headquarters.phone}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {headquarters.phone}
                    </a>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="text-primary h-5 w-5" />
                    <a
                      href={`mailto:${headquarters.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {headquarters.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className="moto-button w-full text-center">
                  Vino să ne cunoști!
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl text-center"
          >
            <h2 className="text-foreground mb-6 text-3xl font-bold md:text-4xl">
              Cum să ne găsești
            </h2>
            <div className="grid gap-8 text-left md:grid-cols-2">
              <div>
                <h3 className="text-foreground mb-3 text-xl font-bold">
                  Cu mașina
                </h3>
                <p className="text-muted-foreground">
                  Parcare gratuită disponibilă în spatele clădirii. Intrare prin
                  Strada Secundară, la 50m de intersecția cu Strada
                  Motocicliștilor.
                </p>
              </div>
              <div>
                <h3 className="text-foreground mb-3 text-xl font-bold">
                  Cu transportul public
                </h3>
                <p className="text-muted-foreground">
                  Autobuzul 205 și 368, stația &#34;Piața Centrală&#34; (5 min
                  de mers pe jos). Metroul M2, stația &#34;Universitate&#34; (10
                  min de jos).
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
