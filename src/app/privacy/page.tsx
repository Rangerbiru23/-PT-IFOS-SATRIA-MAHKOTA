'use client';

import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Shield, Eye, Database, Lock, UserCheck } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="section-padding bg-surface/50">
        <div className="container-professional">
          <div className="max-w-4xl mx-auto">
            <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Kembali ke Beranda
            </Link>
            
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl font-bold mb-4">
                Kebijakan <span style={{background: 'linear-gradient(135deg, oklch(0.47 0.13 220), oklch(0.65 0.15 160))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>Privasi</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                PT IFOS SATRIA MAHKOTA berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="section-padding">
        <div className="container-professional">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Pendahuluan */}
            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <Eye className="w-6 h-6 mr-3 text-primary" />
                  Pendahuluan
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Kebijakan Privasi ini menjelaskan bagaimana PT IFOS SATRIA MAHKOTA mengumpulkan, 
                  menggunakan, melindungi, dan membagikan informasi pribadi Anda ketika Anda menggunakan 
                  website kami atau menghubungi kami untuk layanan konstruksi gedung kesehatan.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Dengan menggunakan website kami, Anda setuju dengan praktik yang dijelaskan dalam 
                  kebijakan privasi ini.
                </p>
              </CardContent>
            </Card>

            {/* Data yang Dikumpulkan */}
            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <Database className="w-6 h-6 mr-3 text-secondary" />
                  Data yang Kami Kumpulkan
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Informasi Pribadi</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li>Nama lengkap</li>
                      <li>Alamat email</li>
                      <li>Nomor telepon</li>
                      <li>Alamat perusahaan atau rumah</li>
                      <li>Informasi profesional dan perusahaan</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Informasi Teknis</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li>Alamat IP</li>
                      <li>Jenis browser dan perangkat</li>
                      <li>Informasi sistem operasi</li>
                      <li>Data penggunaan website</li>
                      <li>Cookies dan data pelacakan</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Penggunaan Data */}
            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <UserCheck className="w-6 h-6 mr-3 text-accent" />
                  Penggunaan Data
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Kami menggunakan informasi yang dikumpulkan untuk tujuan berikut:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Menyediakan layanan konsultasi konstruksi</li>
                  <li>Memproses permintaan dan pertanyaan Anda</li>
                  <li>Mengirim informasi tentang layanan kami</li>
                  <li>Meningkatkan kualitas website dan layanan</li>
                  <li>Menghubungi Anda mengenai proyek konstruksi</li>
                  <li>Memenuhi kewajiban hukum dan peraturan</li>
                  <li>Menganalisis tren dan penggunaan website</li>
                </ul>
              </CardContent>
            </Card>

            {/* Perlindungan Data */}
            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <Lock className="w-6 h-6 mr-3 text-success" />
                  Perlindungan Data
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  PT IFOS SATRIA MAHKOTA berkomitmen untuk melindungi data pribadi Anda dengan:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Enkripsi data yang aman</li>
                  <li>Akses terbatas ke informasi pribadi</li>
                  <li>Keamanan server dan infrastruktur</li>
                  <li>Prosedur keamanan internal yang ketat</li>
                  <li>Update keamanan berkala</li>
                  <li>Pelatihan staf tentang perlindungan data</li>
                </ul>
              </CardContent>
            </Card>

            {/* Berbagi Data */}
            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Pembagian Data</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Kami tidak menjual, menyewakan, atau membagikan informasi pribadi Anda kepada pihak ketiga 
                  untuk tujuan pemasaran, kecuali dalam kondisi berikut:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Dengan persetujuan eksplisit Anda</li>
                  <li>Untuk memenuhi layanan yang diminta</li>
                  <li>Untuk kepatuhan hukum atau perintah pengadilan</li>
                  <li>Dengan mitra tepercaya untuk penyediaan layanan</li>
                  <li>Untuk melindungi hak, properti, atau keselamatan kami</li>
                </ul>
              </CardContent>
            </Card>

            {/* Hak Pengguna */}
            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Hak Anda sebagai Pengguna</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Anda memiliki hak untuk:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Mengakses data pribadi yang kami simpan</li>
                  <li>Memperbaiki data yang tidak akurat</li>
                  <li>Menghapus data pribadi Anda</li>
                  <li>Menolak pemrosesan data tertentu</li>
                  <li>Membatasi penggunaan data Anda</li>
                  <li>Memindahkan data Anda ke layanan lain</li>
                </ul>
              </CardContent>
            </Card>

            {/* Cookies */}
            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Kebijakan Cookies</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Website kami menggunakan cookies untuk:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Mengingat preferensi Anda</li>
                  <li>Menganalisis traffic website</li>
                  <li>Meningkatkan pengalaman pengguna</li>
                  <li>Menyediakan fitur personalisasi</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Anda dapat mengatur browser untuk menolak cookies atau memberi tahu saat cookies dikirim.
                </p>
              </CardContent>
            </Card>

            {/* Perubahan Kebijakan */}
            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Perubahan Kebijakan</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. Perubahan akan 
                  diposting di halaman ini dan efektif segera setelah diposting. Kami menyarankan 
                  Anda untuk secara berkala meninjau kebijakan privasi ini.
                </p>
              </CardContent>
            </Card>

            {/* Kontak */}
            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Hubungi Kami</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Jika Anda memiliki pertanyaan tentang kebijakan privasi ini atau perlindungan data 
                  pribadi Anda, silakan hubungi kami:
                </p>
                <div className="space-y-3 text-muted-foreground">
                  <p><strong>Email:</strong> privacy@ifossatriamahkota.co.id</p>
                  <p><strong>Telepon:</strong> 0852-8570-3497</p>
                  <p><strong>Alamat:</strong> IKA Building Komplek Duta Merlin Blok.B31-B32, 
                  Jl. Gajah Mada No. 3-5, Desa/Kelurahan Petojo Utara, 
                  Kec. Gambir, Kota Adm. Jakarta Pusat, Provinsi DKI Jakarta</p>
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="text-center py-8">
              <Button asChild size="lg" className="btn-professional bg-primary hover:bg-primary/90">
                <Link href="/#contact">
                  Hubungi Kami
                  <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}