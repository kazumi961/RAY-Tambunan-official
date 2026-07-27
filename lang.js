// Simple EN / BM language toggle for Rumah Anak Yatim Tambunan website
// Translations are matched by the data-i18n key on each element.
// Language choice is saved in localStorage so it stays the same across pages.

const translations = {
  // Shared: navigation
  nav_home: { en: "Home", ms: "Laman Utama" },
  nav_about: { en: "About Us", ms: "Tentang Kami" },
  nav_activities: { en: "Activities", ms: "Aktiviti" },
  nav_donation: { en: "Donation", ms: "Derma" },
  nav_contact: { en: "Contact", ms: "Hubungi" },

  // Shared: header
  header_tagline: {
    en: "A caring community where children are encouraged, protected, and given hope for the future.",
    ms: "Sebuah komuniti penyayang yang memberi galakan, perlindungan, dan harapan untuk masa depan kanak-kanak."
  },

  // Shared: footer
  footer_official: { en: "Official website of Rumah Anak Yatim Tambunan, Sabah.", ms: "Laman web rasmi Rumah Anak Yatim Tambunan, Sabah." },
  footer_copyright: { en: "© 2026 Rumah Anak Yatim Tambunan, Sabah. All rights reserved.", ms: "© 2026 Rumah Anak Yatim Tambunan, Sabah. Hak cipta terpelihara." },
  footer_browser: { en: "Recommended browser: Google Chrome (latest version)", ms: "Pelayar disyorkan: Google Chrome (versi terkini)" },
  footer_resolution: { en: "Recommended screen resolution: 1366 x 768 and above.", ms: "Resolusi skrin disyorkan: 1366 x 768 dan ke atas." },
  footer_updated: { en: "Last updated: 06 July 2026", ms: "Terkini dikemaskini: 06 Julai 2026" },
  footer_credits: { en: "Website Credits", ms: "Kredit Laman Web" },
  back_top: { en: "Back to Top", ms: "Kembali ke Atas" },

  // index.html
  title_index: { en: "Home | Rumah Anak Yatim Tambunan", ms: "Laman Utama | Rumah Anak Yatim Tambunan" },
  idx_welcome_title: { en: "Welcome", ms: "Selamat Datang" },
  idx_lead: {
    en: ' <strong>Rumah Anak Yatim Tambunan</strong>, a welfare-focused home in Sabah that represents care, education, and community support for children who need a stable environment.',
    ms: ' <strong>Rumah Anak Yatim Tambunan</strong> ialah sebuah rumah kebajikan di Sabah yang memberi tumpuan kepada penjagaan, pendidikan, dan sokongan komuniti untuk kanak-kanak yang memerlukan persekitaran yang stabil.'
  },
  idx_p2: {
    en: "The home accepts boys and girls who have lost both parents, or lost their father, generally under the age of 12 at the time of admission, with care continuing up to age 18.",
    ms: "Rumah ini menerima kanak-kanak lelaki dan perempuan yang kehilangan kedua-dua ibu bapa, atau kehilangan bapa, biasanya berusia bawah 12 tahun semasa kemasukan, dengan penjagaan diteruskan sehingga umur 18 tahun."
  },
  idx_p3: {
    en: "Admission is primarily for Muslim children, though non-Muslim children may be accepted with a guardian's written consent for the child to be raised within an Islamic upbringing in line with the home's establishment under Sabah's religious welfare administration.",
    ms: "Kemasukan adalah terutamanya untuk kanak-kanak Islam, walaupun kanak-kanak bukan Islam boleh diterima dengan persetujuan bertulis penjaga untuk kanak-kanak tersebut dibesarkan mengikut didikan Islam selaras dengan penubuhan rumah ini di bawah pentadbiran kebajikan agama Sabah."
  },
  idx_donation_btn: { en: "View Donation Instructions", ms: "Lihat Panduan Derma" },
  idx_quick_info: { en: "Quick Information", ms: "Maklumat Ringkas" },
  idx_location: { en: '<strong>Location:</strong> Tambunan, Sabah, Malaysia', ms: '<strong>Lokasi:</strong> Tambunan, Sabah, Malaysia' },
  idx_focus: {
    en: '<strong>Focus:</strong> Child welfare, education support, daily care, and community involvement.',
    ms: '<strong>Fokus:</strong> Kebajikan kanak-kanak, sokongan pendidikan, penjagaan harian, dan penglibatan komuniti.'
  },
  idx_help_title: { en: "How Visitors Can Help", ms: "Bagaimana Pengunjung Boleh Membantu" },
  idx_card1_title: { en: "Donate Essentials", ms: "Derma Keperluan Asas" },
  idx_card1_desc: {
    en: "Basic items such as rice, cooking oil, stationery, hygiene products, and school supplies can support daily needs.",
    ms: "Barangan asas seperti beras, minyak masak, alat tulis, produk kebersihan, dan keperluan sekolah dapat membantu keperluan harian."
  },
  idx_card2_title: { en: "Support Learning", ms: "Sokong Pembelajaran" },
  idx_card2_desc: {
    en: "Educational activities, reading materials, and mentoring can motivate children to build confidence in school.",
    ms: "Aktiviti pendidikan, bahan bacaan, dan bimbingan dapat memotivasikan kanak-kanak membina keyakinan di sekolah."
  },
  idx_card3_title: { en: "Plan a Visit", ms: "Rancang Lawatan" },
  idx_card3_desc: {
    en: "Visitors should contact the home first to ask about suitable visiting hours, needs, and respectful arrangements.",
    ms: "Pengunjung digalakkan menghubungi rumah terlebih dahulu untuk bertanya tentang waktu lawatan yang sesuai, keperluan, dan aturan yang wajar."
  },

  // about.html
  title_about: { en: "About Us | Rumah Anak Yatim Tambunan", ms: "Tentang Kami | Rumah Anak Yatim Tambunan" },
  about_bg_title: { en: "Background", ms: "Latar Belakang" },
  about_p1: {
    en: "Rumah Anak Yatim Tambunan is a caring welfare home located in the interior district of Tambunan, Sabah. The home is associated with the important mission of giving children a safer place to grow, learn, and participate in community life.",
    ms: "Rumah Anak Yatim Tambunan ialah sebuah rumah kebajikan penyayang yang terletak di daerah pedalaman Tambunan, Sabah. Rumah ini menjalankan misi penting untuk memberikan kanak-kanak tempat yang lebih selamat untuk membesar, belajar, dan menyertai kehidupan komuniti."
  },
  about_p2: {
    en: "For many children, consistent care can make a meaningful difference. A supportive home environment helps provide meals, basic needs, school preparation, emotional encouragement, and opportunities to develop positive values.",
    ms: "Bagi kebanyakan kanak-kanak, penjagaan yang konsisten dapat memberi perbezaan yang bermakna. Persekitaran rumah yang menyokong membantu menyediakan makanan, keperluan asas, persediaan persekolahan, sokongan emosi, dan peluang untuk membina nilai-nilai murni."
  },
  about_p3: {
    en: "Day to day, the home is run by house parents and caretakers who live alongside the children, supported by a small team of staff handling administration, schooling coordination, and welfare matters. The home depends almost entirely on donations from the public, mosques, companies, and visiting well-wishers to keep its doors open.",
    ms: "Sehari-hari, rumah ini diuruskan oleh ibu bapa asuh dan penjaga yang tinggal bersama kanak-kanak, disokong oleh sekumpulan kecil kakitangan yang mengendalikan pentadbiran, penyelarasan persekolahan, dan hal ehwal kebajikan. Rumah ini bergantung hampir sepenuhnya kepada sumbangan daripada orang ramai, masjid, syarikat, dan para penderma yang datang melawat untuk terus beroperasi."
  },
  core_values_title: { en: "Core Values", ms: "Nilai Teras" },
  cv_care: { en: "<strong>Care:</strong> Treat children with respect and patience.", ms: "<strong>Penjagaan:</strong> Layan kanak-kanak dengan hormat dan sabar." },
  cv_edu: { en: "<strong>Education:</strong> Encourage learning and school attendance.", ms: "<strong>Pendidikan:</strong> Galakkan pembelajaran dan kehadiran sekolah." },
  cv_comm: { en: "<strong>Community:</strong> Build support through volunteers and donors.", ms: "<strong>Komuniti:</strong> Membina sokongan melalui sukarelawan dan penderma." },
  cv_hope: { en: "<strong>Hope:</strong> Help children feel confident about tomorrow.", ms: "<strong>Harapan:</strong> Membantu kanak-kanak berasa yakin tentang masa depan." },
  purpose_title: { en: "Purpose of the Home", ms: "Tujuan Penubuhan Rumah" },
  purpose_p1: {
    en: "The main purpose of an orphanage or welfare home is to provide shelter and daily care for children who require protection, guidance, and support. In a close community such as Tambunan, public awareness and responsible assistance can help strengthen this purpose.",
    ms: "Tujuan utama rumah anak yatim atau rumah kebajikan adalah untuk menyediakan tempat perlindungan dan penjagaan harian kepada kanak-kanak yang memerlukan perlindungan, bimbingan, dan sokongan. Dalam komuniti rapat seperti Tambunan, kesedaran orang ramai dan bantuan yang bertanggungjawab dapat mengukuhkan tujuan ini."
  },
  purpose_quote: {
    en: '"Every child deserves kindness, safety, and the chance to keep learning."',
    ms: '"Setiap kanak-kanak berhak mendapat kasih sayang, keselamatan, dan peluang untuk terus belajar."'
  },
  purpose_p2: {
    en: "Visitors who want to help should always communicate politely with the organization, ask what is currently needed, and respect the privacy and dignity of the children.",
    ms: "Pengunjung yang ingin membantu digalakkan sentiasa berkomunikasi dengan sopan bersama pihak organisasi, bertanya tentang keperluan semasa, serta menghormati privasi dan maruah kanak-kanak."
  },

  // about.html: history, functions, philosophy, objectives, admission
  history_title: { en: "Brief History", ms: "Sejarah Ringkas Pembinaan dan Penubuhannya" },
  history_p1: {
    en: "Rumah Anak Yatim Tambunan is the only welfare institution of its kind administered under the Sabah Islamic Religious Affairs Department (JHEAINS) since 1997, having previously been managed by the Sabah Islamic Religious Council. Its founding was inspired by former Chief Minister of Sabah, Y.A.B. Dato Harris Mohd. Salleh.",
    ms: "Kompleks Rumah Anak Yatim Tambunan ialah satu-satunya institusi kebajikan yang ditadbirkan oleh Jabatan Hal Ehwal Agama Islam Negeri Sabah (JHEAINS) sejak tahun 1997, setelah sebelum itu ditadbir oleh Majlis Ugama Islam Sabah. Sejarah penubuhannya diilhamkan oleh mantan Ketua Menteri Sabah, Y.A.B. Dato Harris Mohd. Salleh."
  },
  history_p2: {
    en: "Construction began in 1981 and was completed in November 1983 on 15 acres of land at a cost of RM5.3 million. The home began operating that same month with its first 54 residents from across Sabah, and was officially opened by Malaysia's then Deputy Prime Minister, Y.A.B. Dato Musa Hitam, on 3 August 1984.",
    ms: "Pembinaan Kompleks ini bermula pada awal tahun 1981 dan siap pada November 1983 di atas sebidang tanah seluas 15 ekar dengan kos perbelanjaan berjumlah RM5.3 juta. Kompleks ini mula beroperasi pada bulan yang sama dengan menerima 54 orang penghuni pertama dari seluruh pelusuk Sabah, dan dirasmikan oleh Timbalan Perdana Menteri Malaysia ketika itu, Y.A.B. Dato Musa Hitam, pada 3 Ogos 1984."
  },
  functions_title: { en: "Functions", ms: "Fungsi" },
  func_1: { en: "Manage the admission of orphans in accordance with Islamic requirements.", ms: "Mengurus kemasukan anak-anak yatim sesuai dengan kehendak Syara'." },
  func_2: { en: "Maintain the complex and propose improvements to JHEAINS.", ms: "Menyelenggara dan mencadangkan pembaikan Kompleks RAY kepada Jabatan Hal Ehwal Agama Islam Negeri Sabah." },
  func_3: { en: "Provide adequate comfort, welfare, and education for the children.", ms: "Memberikan keselesaan, kebajikan, dan pendidikan yang secukupnya kepada anak-anak yatim." },
  func_4: { en: "Act as secretariat to JHEAINS and the RAY Management Board.", ms: "Menjadi urus setia kepada Jabatan Hal Ehwal Agama Islam Negeri Sabah dan Lembaga Pengurusan RAY." },
  philosophy_title: { en: "Philosophy", ms: "Falsafah" },
  philosophy_p1: {
    en: "The home prioritizes academic excellence and good character grounded in Islamic education, emphasizing both physical and spiritual development, in order to nurture devout, knowledgeable, practicing, and well-mannered Muslims in line with the demands of religion, race, and nation.",
    ms: "Mengutamakan pencapaian kecemerlangan akademik dan sahsiah berlandaskan Tarbiyyah Islamiyah dengan menekankan potensi jasmani dan rohani supaya menjadi warga Muslim yang bertaqwa, berilmu, beramal, dan berakhlak mulia sesuai dengan tuntutan agama, bangsa, dan negara."
  },
  objectives_title: { en: "Objectives & Goals", ms: "Objektif dan Matlamat" },
  obj_1: { en: "Help orphans enjoy a fulfilling life within the community, in line with Islamic teachings.", ms: "Melaksanakan tugas yang dikehendaki oleh agama Islam iaitu membantu anak-anak yatim agar dapat menikmati kehidupan yang sempurna di tengah-tengah masyarakat." },
  obj_2: { en: "Provide a comfortable and complete place to live.", ms: "Menyediakan tempat yang sempurna dan selesa untuk didiami oleh anak-anak yatim." },
  obj_3: { en: "Educate and guide children through both formal and informal learning, for worldly and spiritual benefit.", ms: "Mendidik dan membimbing anak-anak yatim melalui pendidikan formal dan informal sama ada ilmu dunia ataupun akhirat agar memperolehi pencapaian yang cemerlang pada masa akan datang." },
  obj_4: { en: "Raise independent, high-character, knowledgeable, and devout individuals.", ms: "Melahirkan warga anak yatim yang boleh berdikari, berakhlak tinggi, berilmu, beriman dan bertakwa." },
  obj_5: { en: "Reflect Islam's concern for the welfare of orphans in need.", ms: "Menunjukkan keprihatinan Islam terhadap kebajikan anak-anak yatim yang tidak berkemampuan dalam menghadapi perkembangan hidup di tengah-tengah masyarakat." },
  admission_title: { en: "Who Can Apply", ms: "Golongan Sasar" },
  admission_lead: {
    en: "Admission is intended for orphaned children who meet the following key requirements:",
    ms: "Kemasukan adalah untuk anak yatim piatu yang memenuhi syarat-syarat utama berikut:"
  },
  adm_1: { en: "Children who have lost their mother and/or father.", ms: "Anak yang kematian ibu dan/atau bapa." },
  adm_2: { en: "Aged 7 to 12 at the time of application (care continues up to age 19).", ms: "Berumur 7 hingga 12 tahun ketika memohon (had penjagaan ialah sehingga 19 tahun)." },
  adm_3: {
    en: "Muslim (non-Muslim children may be considered with the guardian's written consent for an Islamic upbringing).",
    ms: "Berugama Islam (anak yang bukan berugama Islam boleh dipertimbangkan dengan syarat penjaganya memberikan persetujuan bertulis bahawa anak itu boleh dididik dengan didikan Islam)."
  },
  adm_4: {
    en: "Applications must include certified parents' death certificates, a certified birth certificate copy, and certified identification of the parent or guardian.",
    ms: "Setiap permohonan hendaklah disertakan sijil kematian ibu dan bapa, salinan surat beranak, dan salinan Kad Pengenalan ibu, bapa atau penjaga yang telah disahkan."
  },
  adm_5: {
    en: "Applications must be supported by figures such as the village Imam or headman, the District Welfare Officer, a JHEAINS liaison officer, a medical officer, or a school headmaster/supervisor.",
    ms: "Permohonan hendaklah disahkan dan disokong oleh orang-orang tertentu seperti Imam dan Ketua Kampung, Pegawai Kebajikan Daerah, Pegawai Perhubungan JHEAINS, Pegawai Perubatan, atau Penyelia Sekolah/Guru Besar."
  },
  admission_apply: {
    en: "Application forms are available at Rumah Anak Yatim Tambunan or at JHEAINS District Liaison Offices, and should be submitted to: Pengetua, Rumah Anak Yatim, Peti Surat 36, 89657 Tambunan.",
    ms: "Borang permohonan boleh didapati di Rumah Anak Yatim Tambunan atau Pejabat Perhubungan Daerah JHEAINS, dan dihantar kepada: Pengetua, Rumah Anak Yatim, Peti Surat 36, 89657 Tambunan."
  },

  // activities.html
  title_activities: { en: "Activities | Rumah Anak Yatim Tambunan", ms: "Aktiviti | Rumah Anak Yatim Tambunan" },
  act_title: { en: "Activities & Achievements", ms: "Aktiviti & Pencapaian" },
  act_lead: {
    en: "Activities can help children develop confidence, discipline, creativity, and friendship. The examples below show suitable programmes that visitors and community groups may support.",
    ms: "Aktiviti dapat membantu kanak-kanak membina keyakinan, disiplin, kreativiti, dan persahabatan. Contoh di bawah menunjukkan program yang sesuai untuk disokong oleh pengunjung dan kumpulan komuniti."
  },
  act_card1_title: { en: "Education Support", ms: "Sokongan Pendidikan" },
  act_card1_desc: {
    en: "Homework guidance, reading circles, motivational talks, and school supply drives help children stay engaged with learning.",
    ms: "Bimbingan kerja rumah, kumpulan bacaan, ceramah motivasi, dan kutipan alat sekolah membantu kanak-kanak terus fokus dalam pembelajaran."
  },
  act_card2_title: { en: "Life Skills", ms: "Kemahiran Hidup" },
  act_card2_desc: {
    en: "Gardening, cleaning routines, cooking assistance, and teamwork activities build independence and practical confidence.",
    ms: "Berkebun, rutin pembersihan, bantuan memasak, dan aktiviti berpasukan membina kemandirian dan keyakinan praktikal."
  },
  act_card3_title: { en: "Community Events", ms: "Acara Komuniti" },
  act_card3_desc: {
    en: "Festive visits, sports days, charity meals, and volunteer programmes strengthen bonds between the home and society.",
    ms: "Lawatan perayaan, hari sukan, jamuan amal, dan program sukarelawan mengukuhkan hubungan antara rumah dan masyarakat."
  },
  ach_title: { en: "Possible Achievements", ms: "Pencapaian Yang Mungkin Dicapai" },
  ach_1: { en: "Improved school readiness through donated stationery and reading support.", ms: "Kesediaan persekolahan yang lebih baik melalui sumbangan alat tulis dan sokongan bacaan." },
  ach_2: { en: "Stronger community awareness through visits from local organizations.", ms: "Kesedaran komuniti yang lebih kukuh melalui lawatan daripada organisasi tempatan." },
  ach_3: { en: "Better daily comfort through food, hygiene, and clothing contributions.", ms: "Keselesaan harian yang lebih baik melalui sumbangan makanan, kebersihan, dan pakaian." },
  ach_4: { en: "More positive social development through group activities and mentoring.", ms: "Perkembangan sosial yang lebih positif melalui aktiviti kumpulan dan bimbingan." },
  vol_title: { en: "Volunteer Reminder", ms: "Peringatan Sukarelawan" },
  vol_p: {
    en: "Volunteers should request permission before organizing activities and should avoid taking or sharing children's photos without proper consent.",
    ms: "Sukarelawan digalakkan memohon kebenaran sebelum menganjurkan aktiviti dan perlu mengelakkan mengambil atau berkongsi gambar kanak-kanak tanpa persetujuan yang sewajarnya."
  },
  vol_link: { en: "Contact the home before planning a visit.", ms: "Hubungi rumah ini sebelum merancang lawatan." },
  gallery_title: { en: "Our Achievements", ms: "Pencapaian Kami" },
  gallery_lead: {
    en: "A look at some of the home's recent achievements. Photos and details will be added here soon.",
    ms: "Sepintas lalu beberapa pencapaian terkini rumah ini. Gambar dan butiran akan ditambah di sini tidak lama lagi."
  },
  gallery_placeholder: { en: "Photo coming soon", ms: "Gambar akan datang" },
  gallery_placeholder_title: { en: "Achievement title coming soon", ms: "Tajuk pencapaian akan datang" },
  gallery_1_title: {
    en: "Best Achievement in Maulidur Rasul Celebration Participation",
    ms: "Pencapaian Terbaik dalam Penyertaan Sambutan Maulidurrasul"
  },
  gallery_1_desc: {
    en: "Best Contingent for 3 consecutive years since 2022.",
    ms: "Kontinjen Terbaik 3 tahun berturut-turut sejak 2022."
  },
  gallery_2_title: {
    en: "Banner & Calligraphy Participation",
    ms: "Penyertaan Sepanduk & Kaligrafi"
  },
  gallery_2_desc: {
    en: "Participation in the banner/calligraphy category at the district-level Maulidur Rasul celebration in Tambunan.",
    ms: "Penyertaan sepanduk/kaligrafi sempena Sambutan Maulidur Rasul peringkat daerah Tambunan."
  },

  // contact.html
  title_contact: { en: "Contact | Rumah Anak Yatim Tambunan", ms: "Hubungi | Rumah Anak Yatim Tambunan" },
  contact_title: { en: "Contact & Visit", ms: "Hubungi & Lawatan" },
  contact_lead: {
    en: "Please contact us before visiting, donating, or organizing any activity, so we can assist you properly.",
    ms: "Sila hubungi kami sebelum melawat, menderma, atau menganjurkan sebarang aktiviti, supaya kami dapat membantu anda dengan sewajarnya."
  },
  vg_title: { en: "Visitor Guidance", ms: "Panduan Pengunjung" },
  vg_area: { en: '<strong>Area:</strong> Tambunan, Sabah, Malaysia', ms: '<strong>Kawasan:</strong> Tambunan, Sabah, Malaysia' },
  vg_action: {
    en: "<strong>Recommended action:</strong> Call or message the organization first to ask about visiting hours, current needs, and volunteer guidelines.",
    ms: "<strong>Tindakan disyorkan:</strong> Hubungi atau hantar mesej kepada pihak organisasi terlebih dahulu untuk bertanya tentang waktu lawatan, keperluan semasa, dan panduan sukarelawan."
  },
  vg_name: { en: "<strong>Contact Name:</strong> Haslee bin Sairin @ Harimin", ms: "<strong>Nama Hubungan:</strong> Haslee bin Sairin @ Harimin" },
  vg_email: {
    en: '<strong>Email:</strong> <a href="mailto:rumahanakyatimtambunan@gmail.com">rumahanakyatimtambunan@gmail.com</a>',
    ms: '<strong>E-mel:</strong> <a href="mailto:rumahanakyatimtambunan@gmail.com">rumahanakyatimtambunan@gmail.com</a>'
  },
  vg_phone: {
    en: '<strong>Phone:</strong> <a href="tel:+6087774120">+6087-774 120</a>',
    ms: '<strong>Telefon:</strong> <a href="tel:+6087774120">+6087-774 120</a>'
  },
  map_title: { en: "Map Reference", ms: "Rujukan Peta" },
  map_p: { en: "Open Google Maps to search for Rumah Anak Yatim Tambunan, Sabah.", ms: "Buka Google Maps untuk mencari Rumah Anak Yatim Tambunan, Sabah." },
  map_link: { en: "View on Google Maps", ms: "Lihat di Google Maps" },
  rc_title: { en: "Respectful Contact Tips", ms: "Tip Hubungan Yang Sopan" },
  rc1_title: { en: "Ask First", ms: "Tanya Dahulu" },
  rc1_desc: { en: "Contact the home before arriving so staff can plan around children's schedules and privacy.", ms: "Hubungi rumah ini sebelum tiba supaya kakitangan dapat merancang mengikut jadual dan privasi kanak-kanak." },
  rc2_title: { en: "Be Clear", ms: "Jelas Dalam Tujuan" },
  rc2_desc: { en: "Explain whether you want to donate items, volunteer, organize an activity, or request information.", ms: "Terangkan sama ada anda ingin menderma barangan, menjadi sukarelawan, menganjurkan aktiviti, atau meminta maklumat." },
  rc3_title: { en: "Be Respectful", ms: "Hormati Privasi" },
  rc3_desc: { en: "Avoid posting children's personal information or photos without permission from the responsible party.", ms: "Elakkan memuat naik maklumat peribadi atau gambar kanak-kanak tanpa kebenaran daripada pihak yang bertanggungjawab." },

  // donation.html
  title_donation: { en: "Donation | Rumah Anak Yatim Tambunan", ms: "Derma | Rumah Anak Yatim Tambunan" },
  funding_title: { en: "Funding Sources", ms: "Sumbangan Kewangan dan Pembiayaan" },
  funding_p1: {
    en: "Rumah Anak Yatim Tambunan is funded through an allocation from the Sabah State Government via the Sabah Islamic Religious Affairs Department (JHEAINS), together with public donations from individuals, organizations, and companies through the Rumah Anak Yatim Tambunan Trust Fund (Tabung Amanah).",
    ms: "Punca sumber pembiayaan kewangan Rumah Anak Yatim Tambunan adalah terdiri daripada peruntukan Kerajaan Negeri Sabah melalui Jabatan Hal Ehwal Agama Islam Negeri Sabah (JHEAINS), serta sumbangan derma daripada orang awam sama ada individu, pertubuhan dan syarikat melalui Tabung Amanah Rumah Anak Yatim Tambunan."
  },
  don_title: { en: "Donation Instructions", ms: "Panduan Derma" },
  don_lead: {
    en: "Donations can support meals, school items, personal hygiene, clothing, activities, and maintenance needs. Please confirm current needs before sending items.",
    ms: "Sumbangan dapat membantu keperluan makanan, alat sekolah, kebersihan diri, pakaian, aktiviti, dan penyelenggaraan. Sila sahkan keperluan semasa sebelum menghantar barangan."
  },
  si_title: { en: "Suggested Items", ms: "Barangan Dicadangkan" },
  si_1: { en: "Rice, noodles, canned food, cooking oil, sugar, and milk powder.", ms: "Beras, mi, makanan tin, minyak masak, gula, dan susu tepung." },
  si_2: { en: "Soap, shampoo, toothpaste, toothbrushes, towels, and cleaning supplies.", ms: "Sabun, syampu, ubat gigi, berus gigi, tuala, dan bahan pembersihan." },
  si_3: { en: "School bags, exercise books, pens, pencils, uniforms, and learning materials.", ms: "Beg sekolah, buku latihan, pen, pensel, uniform, dan bahan pembelajaran." },
  si_4: { en: "Blankets, bedsheets, clothes, shoes, and sports equipment in good condition.", ms: "Selimut, cadar, pakaian, kasut, dan peralatan sukan dalam keadaan baik." },
  before_title: { en: "Before Donating", ms: "Sebelum Menderma" },
  before_important: {
    en: '<strong>Important:</strong> Please contact us first using the details on our Contact page to confirm current needs before sending items or making a delivery.',
    ms: '<strong>Penting:</strong> Sila hubungi kami terlebih dahulu menggunakan butiran pada muka surat Hubungi untuk mengesahkan keperluan semasa sebelum menghantar barangan atau membuat penghantaran.'
  },
  contact_page_link: { en: "Go to Contact Page", ms: "Ke Muka Surat Hubungi" },
  rg_title: { en: "Responsible Giving Steps", ms: "Langkah Menderma Bertanggungjawab" },
  rg1_title: { en: "1. Verify", ms: "1. Sahkan" },
  rg1_desc: { en: "Contact us using the details on our Contact page to confirm current needs before donating.", ms: "Hubungi kami menggunakan butiran pada muka surat Hubungi untuk mengesahkan keperluan semasa sebelum menderma." },
  rg2_title: { en: "2. Prepare", ms: "2. Sediakan" },
  rg2_desc: { en: "Pack donated items neatly, check expiry dates, and avoid damaged or unsuitable goods.", ms: "Susun barangan sumbangan dengan kemas, periksa tarikh luput, dan elakkan barangan yang rosak atau tidak sesuai." },
  rg3_title: { en: "3. Deliver", ms: "3. Hantar" },
  rg3_desc: { en: "Arrange a suitable time for delivery and keep communication respectful and clear.", ms: "Aturkan masa yang sesuai untuk penghantaran dan pastikan komunikasi sopan dan jelas." },

  // aboutme.html (Website Credits)
  title_credits: { en: "Website Credits | Rumah Anak Yatim Tambunan", ms: "Kredit Laman Web | Rumah Anak Yatim Tambunan" },
  credits_title: { en: "Website Credits", ms: "Kredit Laman Web" },
  credits_lead: {
    en: "This website was designed and developed for Rumah Anak Yatim Tambunan, Sabah.",
    ms: "Laman web ini direka dan dibangunkan untuk Rumah Anak Yatim Tambunan, Sabah."
  },
  dt_website_title: { en: "Website Title", ms: "Tajuk Laman Web" },
  dd_website_title: { en: "Official Website of Rumah Anak Yatim Tambunan, Sabah", ms: "Laman Web Rasmi Rumah Anak Yatim Tambunan, Sabah" },
  dt_developed_by: { en: "Developed By", ms: "Dibangunkan Oleh" },
  dt_developer_phone: { en: "Phone", ms: "Telefon" },
  dt_developer_email: { en: "Email", ms: "E-mel" },
  dt_last_updated: { en: "Last Updated", ms: "Terkini Dikemaskini" },
  dd_last_updated: { en: "06 July 2026", ms: "06 Julai 2026" },
  back_home: { en: "Back to Home", ms: "Kembali ke Laman Utama" }
};

function applyLanguage(lang) {
  document.documentElement.setAttribute("lang", lang === "ms" ? "ms" : "en");

  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    const key = el.getAttribute("data-i18n");
    const entry = translations[key];
    if (!entry) return;
    const text = lang === "ms" ? entry.ms : entry.en;
    if (el.tagName === "TITLE") {
      el.textContent = text;
    } else {
      el.innerHTML = text;
    }
  });

  const toggleBtn = document.getElementById("langToggle");
  if (toggleBtn) {
    toggleBtn.textContent = lang === "ms" ? "EN" : "BM";
    toggleBtn.setAttribute("aria-label", lang === "ms" ? "Switch to English" : "Tukar ke Bahasa Malaysia");
  }
}

function getSavedLanguage() {
  return localStorage.getItem("site_lang") || "en";
}

document.addEventListener("DOMContentLoaded", function () {
  const currentLang = getSavedLanguage();
  applyLanguage(currentLang);

  const toggleBtn = document.getElementById("langToggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
      const newLang = getSavedLanguage() === "ms" ? "en" : "ms";
      localStorage.setItem("site_lang", newLang);
      applyLanguage(newLang);
    });
  }
});
