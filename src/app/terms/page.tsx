'use client';

import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, FileText, Shield, Users, Gavel, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function TermsConditions() {
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
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl font-bold mb-4">
                Syarat & <span style={{background: 'linear-gradient(135deg, oklch(0.47 0.13 220), oklch(0.65 0.15 160))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>Ketentuan</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Syarat dan ketentuan penggunaan layanan PT IFOS SATRIA MAHKOTA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="section-padding">
        <div className="container-professional">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Pendahuluan */}
            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <FileText className="w-6 h-6 mr-3 text-primary" />
                  Pendahuluan
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Selamat datang di website PT IFOS SATRIA MAHKOTA. Syarat dan Ketentuan ini 
                  mengatur penggunaan website kami dan layanan konstruksi gedung kesehatan yang kami sediakan.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Dengan mengakses atau menggunakan website kami, Anda setuju untuk terikat oleh 
                  syarat dan ketentuan ini. Jika Anda tidak setuju dengan bagian mana pun dari 
                  syarat ini, jangan gunakan website atau layanan kami.
                </p>
              </CardContent>
            </Card>

            {/* Definisi */}
            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Definisi</h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <strong>"Perusahaan":</strong> PT IFOS SATRIA MAHKOTA, perusahaan konstruksi 
                    gedung kesehatan yang terdaftar sesuai hukum yang berlaku di Indonesia.
                  </div>
                  <div>
                    <strong>"Website":</strong> Situs web resmi Perusahaan di alamat yang dapat 
                    diakses oleh pengguna.
                  </div>
                  <div>
                    <strong>"Layanan":</strong> Semua layanan konstruksi gedung kesehatan yang 
                    disediakan oleh Perusahaan, termasuk konsultasi, perencanaan, dan pelaksanaan proyek.
                  </div>
                  <div>
                    <strong>"Pengguna":</strong> Individu atau entitas yang mengakses atau menggunakan 
                    website dan/atau layanan Perusahaan.
                  </div>
                  <div>
                    <strong>"Klien":</strong> Pengguna yang menggunakan atau berminat menggunakan 
                    layanan konstruksi Perusahaan.
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Penggunaan Website */}
            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <Users className="w-6 h-6 mr-3 text-secondary" />
                  Penggunaan Website
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Anda setuju untuk:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Menggunakan website hanya untuk tujuan yang sah dan legal</li>
                  <li>Tidak melakukan aktivitas yang melanggar hukum atau peraturan</li>
                  <li>Tidak mengganggu atau merusak fungsi website</li>
                  <li>Tinggal memberikan informasi yang akurat dan benar</li>
                  <li>Memperlakukan konten website dengan hak cipta yang sesuai</li>
                  <li>Tidak menggunakan website untuk penipuan atau kegiatan curang</li>
                </ul>
              </CardContent>
            </Card>

            {/* Layanan Konstruksi */}
            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <Shield className="w-6 h-6 mr-3 text-accent" />
                  Layanan Konstruksi
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Ruang Lingkup Layanan</h3>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      Perusahaan menyediakan layanan konstruksi untuk:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li>Pembangunan rumah sakit dan fasilitas kesehatan</li>
                      <li>Konstruksi klinik dan puskesmas</li>
                      <li>Renovasi dan upgrade gedung medis</li>
                      <li>Konsultasi desain dan perencanaan</li>
                      <li>Manajemen proyek konstruksi</li>
                      <li>Layanan maintenance dan perawatan</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Kewajiban Klien</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li>Memberikan informasi proyek yang akurat</li>
                      <li>Menyediakan dokumen dan perizinan yang diperlukan</li>
                      <li>Melakukan pembayaran sesuai kesepakatan</li>
                      <li>Kooperatif dalam proses konstruksi</li>
                      <li>Mematuhi jadwal dan kesepakatan proyek</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hak Cipta dan Kekayaan Intelektual */}
            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Hak Cipta dan Kekayaan Intelektual</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Semua konten, desain, gambar, teks, dan materi di website ini dilindungi oleh 
                  hak cipta dan undang-undang kekayaan intelektual lainnya.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Anda tidak diperbolehkan:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Menggandakan atau mendistribusikan konten tanpa izin</li>
                  <li>Menggunakan konten untuk tujuan komersial</li>
                  <li>Memodifikasi atau mengadaptasi konten website</li>
                  <li>Menghapus atau mengubah hak cipta dan merek dagang</li>
                </ul>
              </CardContent>
            </Card>

            {/* Pembatasan Tanggung Jawab */}
            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <AlertCircle className="w-6 h-6 mr-3 text-warning" />
                  Pembatasan Tanggung Jawab
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Website dan layanan kami disediakan "sebagaimana adanya" tanpa jaminan apa pun. 
                  Perusahaan tidak bertanggung jawab atas:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Kerugian langsung atau tidak langsung dari penggunaan website</li>
                  <li>Gangguan teknis atau downtime website</li>
                  <li>Ketidakakuratan informasi yang disediakan</li>
                  <li>Kerusakan yang disebabkan oleh pihak ketiga</li>
                  <li>Kehilangan data atau informasi</li>
                </ul>
              </CardContent>
            </Card>

            {/* Hukum yang Berlaku */}
            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <Gavel className="w-6 h-6 mr-3 text-success" />
                  Hukum yang Berlaku
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Syarat dan ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum 
                  Republik Indonesia. Setiap sengketa yang timbul dari atau berhubungan dengan 
                  syarat dan ketentuan ini akan diselesaikan melalui:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Musyawarah untuk mufakat terlebih dahulu</li>
                  <li>Mediasi atau arbitrase jika musyawarah gagal</li>
                  <li>Pengadilan negeri Jakarta Pusat sebagai yurisdiksi eksklusif</li>
                </ul>
              </CardContent>
            </Card>

            {/* Privasi */}
            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Privasi Data</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Privasi Anda penting bagi kami. Penggunaan data pribadi Anda diatur dalam 
                  Kebijakan Privasi kami yang merupakan bagian tidak terpisahkan dari syarat dan ketentuan ini.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Dengan menggunakan website kami, Anda setuju dengan pengumpulan, penggunaan, 
                  dan perlindungan data sesuai dengan kebijakan privasi kami.
                </p>
              </CardContent>
            </Card>

            {/* Perubahan Syarat */}
            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Perubahan Syarat dan Ketentuan</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Perusahaan berhak mengubah syarat dan ketentuan ini kapan saja. Perubahan akan 
                  efektif segera setelah diposting di website. Pengguna disarankan untuk secara 
                  berkala meninjau syarat dan ketentuan ini.
                </p>
              </CardContent>
            </Card>

            {/* Kontak */}
            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Hubungi Kami</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Jika Anda memiliki pertanyaan tentang syarat dan ketentuan ini, silakan hubungi kami:
                </p>
                <div className="space-y-3 text-muted-foreground">
                  <p><strong>Email:</strong> legal@ifossatriamahkota.co.id</p>
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