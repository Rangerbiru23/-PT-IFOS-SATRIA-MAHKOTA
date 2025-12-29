'use client';

import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Building2, 
  Users, 
  Award, 
  Shield, 
  Clock, 
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Star,
  ArrowRight,
  Heart,
  HardHat
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-construction-pattern">
        <div className="absolute inset-0 bg-healthcare-gradient opacity-5"></div>
        <div className="container-professional relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
                <HardHat className="w-4 h-4 mr-2" />
                Konstruksi Gedung Kesehatan Terpercaya
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Membangun <span style={{background: 'linear-gradient(135deg, oklch(0.47 0.13 220), oklch(0.65 0.15 160))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>Masa Depan</span> Kesehatan Indonesia
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                PT IFOS SATRIA MAHKOTA adalah mitra terpercaya dalam konstruksi gedung kesehatan 
                yang mengedepankan kualitas, keselamatan, dan keberlanjutan untuk menciptakan 
                fasilitas kesehatan yang modern dan berkualitas tinggi.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="btn-professional bg-primary hover:bg-primary/90">
                  Konsultasi Proyek
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Lihat Portfolio
                </Button>
              </div>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="relative z-10">
                <img 
                  src="/logo.png" 
                  alt="PT IFOS SATRIA MAHKOTA" 
                  className="w-full h-auto max-w-md mx-auto rounded-2xl shadow-lg"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent rounded-full flex items-center justify-center animate-pulse">
                <Heart className="w-12 h-12 text-accent-foreground" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-secondary rounded-full flex items-center justify-center animate-pulse delay-75">
                <Building2 className="w-10 h-10 text-secondary-foreground" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section id="about" className="section-padding bg-surface/50">
        <div className="container-professional">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tentang <span style={{background: 'linear-gradient(135deg, oklch(0.47 0.13 220), oklch(0.65 0.15 160))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>PT IFOS SATRIA MAHKOTA</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Perusahaan konstruksi spesialis gedung kesehatan dengan pengalaman bertahun-tahun 
              dalam mewujudkan fasilitas medis yang modern dan berkualitas.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="card-hover border-0 shadow-md">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Spesialis Konstruksi</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Fokus pada pembangunan gedung kesehatan seperti rumah sakit, klinik, dan fasilitas medis 
                  lainnya dengan standar internasional.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-hover border-0 shadow-md">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="text-xl">Kualitas Terjamin</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Menggunakan material terbaik, teknologi konstruksi modern, dan tim ahli yang 
                  berpengalaman untuk hasil yang memuaskan.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-hover border-0 shadow-md">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-xl">Tim Profesional</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Didukung oleh arsitek, insinyur, dan tenaga ahli yang berkompeten dalam 
                  konstruksi gedung kesehatan.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding">
        <div className="container-professional">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Layanan <span style={{background: 'linear-gradient(135deg, oklch(0.65 0.15 160), oklch(0.75 0.15 60))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>Unggulan Kami</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Solusi konstruksi komprehensif untuk berbagai kebutuhan fasilitas kesehatan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                title: "Rumah Sakit",
                description: "Konstruksi rumah sakit modern dengan fasilitas lengkap sesuai standar kesehatan internasional."
              },
              {
                icon: Heart,
                title: "Klinik & Puskesmas",
                description: "Pembangunan klinik dan puskesmas yang fungsional dan nyaman untuk pelayanan kesehatan masyarakat."
              },
              {
                icon: Shield,
                title: "Fasilitas Medis",
                description: "Konstruksi laboratorium, fasilitas diagnostik, dan pusat penelitian medis dengan teknologi canggih."
              },
              {
                icon: Users,
                title: "Rumah Sakit Khusus",
                description: "Pembangunan rumah sakit khusus seperti mata, jantung, dan fasilitas kesehatan spesialis lainnya."
              },
              {
                icon: Award,
                title: "Renovasi & Upgrade",
                description: "Renovasi dan peningkatan fasilitas kesehatan existing untuk meningkatkan kapasitas dan kualitas."
              },
              {
                icon: Clock,
                title: "Maintenance",
                description: "Layanan perawatan dan pemeliharaan berkala untuk menjaga kualitas gedung kesehatan."
              }
            ].map((service, index) => (
              <Card key={index} className="card-hover border-0 shadow-md h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-healthcare-gradient rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="section-padding bg-surface/50">
        <div className="container-professional">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Proyek Selesai" },
              { number: "15+", label: "Tahun Pengalaman" },
              { number: "100%", label: "Kepuasan Klien" },
              { number: "24/7", label: "Dukungan Teknis" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2" style={{background: 'linear-gradient(135deg, oklch(0.47 0.13 220), oklch(0.65 0.15 160))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-professional">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Mengapa Memilih <span style={{background: 'linear-gradient(135deg, oklch(0.47 0.13 220), oklch(0.65 0.15 160))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>IFOS SATRIA MAHKOTA</span>
              </h2>
              <div className="space-y-6">
                {[
                  "Pengalaman bertahun-tahun dalam konstruksi gedung kesehatan",
                  "Tim profesional dengan sertifikasi kompeten",
                  "Menggunakan material berkualitas tinggi",
                  "Harga kompetitif dengan hasil terbaik",
                  "Garansi dan maintenance purnajual",
                  "Proses transparan dari awal hingga akhir"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <Button className="btn-professional bg-primary hover:bg-primary/90 mt-8">
                Mulai Konsultasi
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            <div className="relative">
              <div className="bg-construction-pattern rounded-2xl p-8 shadow-lg">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <Award className="w-12 h-12 text-primary mx-auto mb-2" />
                    <div className="font-semibold">Berkualitas</div>
                  </div>
                  <div className="text-center">
                    <Shield className="w-12 h-12 text-secondary mx-auto mb-2" />
                    <div className="font-semibold">Terpercaya</div>
                  </div>
                  <div className="text-center">
                    <Clock className="w-12 h-12 text-accent mx-auto mb-2" />
                    <div className="font-semibold">Tepat Waktu</div>
                  </div>
                  <div className="text-center">
                    <Heart className="w-12 h-12 text-success mx-auto mb-2" />
                    <div className="font-semibold">Berkomitmen</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-surface/50">
        <div className="container-professional">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Hubungi <span style={{background: 'linear-gradient(135deg, oklch(0.47 0.13 220), oklch(0.65 0.15 160))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>Kami</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Siap memulai proyek konstruksi gedung kesehatan Anda? Tim kami siap membantu.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Informasi Kontak</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Alamat</h4>
                    <p className="text-muted-foreground">
                      IKA Building Komplek Duta Merlin Blok.B31-B32, 
                      Jl. Gajah Mada No. 3-5, Desa/Kelurahan Petojo Utara, 
                      Kec. Gambir, Kota Adm. Jakarta Pusat, Provinsi DKI Jakarta
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Telepon</h4>
                    <p className="text-muted-foreground">0852-8570-3497</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-muted-foreground">info@ifossatriamahkota.co.id</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Kirim Pesan</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Nama Lengkap</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Masukkan nama lengkap Anda"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Pesan</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    placeholder="Jelaskan kebutuhan proyek Anda..."
                  ></textarea>
                </div>
                <Button type="submit" className="btn-professional bg-primary hover:bg-primary/90 w-full">
                  Kirim Pesan
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background">
        <div className="container-professional py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-background/20 rounded-lg flex items-center justify-center">
                  <span className="text-background font-bold text-lg">ISM</span>
                </div>
                <div>
                  <h3 className="font-bold">PT IFOS SATRIA MAHKOTA</h3>
                  <p className="text-sm opacity-80">Konstruksi Gedung Kesehatan</p>
                </div>
              </div>
              <p className="text-sm opacity-80 leading-relaxed">
                Mitra terpercaya dalam mewujudkan fasilitas kesehatan yang modern dan berkualitas.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Konstruksi Rumah Sakit</a></li>
                <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Klinik & Puskesmas</a></li>
                <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Fasilitas Medis</a></li>
                <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Renovasi & Maintenance</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="opacity-80 hover:opacity-100 transition-opacity">Tentang Kami</a></li>
                <li><a href="#portfolio" className="opacity-80 hover:opacity-100 transition-opacity">Portfolio</a></li>
                <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Karir</a></li>
                <li><a href="#contact" className="opacity-80 hover:opacity-100 transition-opacity">Kontak</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/privacy" className="opacity-80 hover:opacity-100 transition-opacity">Privacy Policy</a></li>
                <li><a href="/terms" className="opacity-80 hover:opacity-100 transition-opacity">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-80">
            <p>&copy; 2024 PT IFOS SATRIA MAHKOTA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}