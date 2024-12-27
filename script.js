document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("quiz-form");
    
    // Modal ve öğeleri
    const modal = document.getElementById("result-modal");
    const modalCloseBtn = document.getElementById("close-modal");
    const resultImage = document.getElementById("result-image");
    const resultText = document.getElementById("result-text");
    const restartBtn = document.getElementById("restart-btn");
  
    // 13 farklı Spartan resimleri ve mesajları
    const spartansData = [
      { src: "images/spartans1.jpeg",  message: "Sen Gmove Spartansın!" },
      { src: "images/spartans2.jpeg",  message: "Sen Antik Savaşçı Spartansın!" },
      { src: "images/spartans3.jpeg",  message: "Sen Viking Savaşçısı Spartansın!" },
      { src: "images/spartans4.jpeg",  message: "Sen Roma Savaşçısı Spartansın!" },
      { src: "images/spartans5.jpeg",  message: "Sen Maskeli Savaşçı Spartansın!" },
      { src: "images/spartans6.jpeg",  message: "Sen Çöl Savaşçısı Spartansın!" },
      { src: "images/spartans7.jpeg",  message: "Sen Halloween Savaşçısı Spartansın!" },
      { src: "images/spartans8.jpeg",  message: "Sen Kaslı Savaşçı Spartansın!" },
      { src: "images/spartans9.jpeg",  message: "Sen İmparator Savaşçı Spartansın!" },
      { src: "images/spartans10.jpeg", message: "Sen Şövalye Savaşçısı Spartansın!" },
      { src: "images/spartans11.jpeg", message: "Sen Büyücü Savaşçı Spartansın!" },
      { src: "images/spartans12.jpeg", message: "Sen Zengin Korsan Spartansın!" },
      { src: "images/spartans13.png", message: "Sen Yeleli Savaşçı Spartansın!" }
    ];
    
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      
      // Yanıtları topla
      let totalScore = 0;
      
      // Sorular 1'den 5'e kadar
      for (let i = 1; i <= 5; i++) {
        const answer = form.querySelector(`input[name="q${i}"]:checked`).value;
        switch(answer) {
          case "A": totalScore += 1; break;
          case "B": totalScore += 2; break;
          case "C": totalScore += 3; break;
          case "D": totalScore += 4; break;
        }
      }
      
      /*
       * Toplam Puan (5..20) ile 13 sonuç:
       *  - 5-6   => resim 1
       *  - 7     => resim 2
       *  - 8     => resim 3
       *  - 9     => resim 4
       *  - 10    => resim 5
       *  - 11    => resim 6
       *  - 12    => resim 7
       *  - 13    => resim 8
       *  - 14    => resim 9
       *  - 15    => resim 10
       *  - 16    => resim 11
       *  - 17    => resim 12
       *  - 18-20 => resim 13
       */
      let selectedIndex;
      if (totalScore <= 6) {
        selectedIndex = 0;
      } else if (totalScore === 7) {
        selectedIndex = 1;
      } else if (totalScore === 8) {
        selectedIndex = 2;
      } else if (totalScore === 9) {
        selectedIndex = 3;
      } else if (totalScore === 10) {
        selectedIndex = 4;
      } else if (totalScore === 11) {
        selectedIndex = 5;
      } else if (totalScore === 12) {
        selectedIndex = 6;
      } else if (totalScore === 13) {
        selectedIndex = 7;
      } else if (totalScore === 14) {
        selectedIndex = 8;
      } else if (totalScore === 15) {
        selectedIndex = 9;
      } else if (totalScore === 16) {
        selectedIndex = 10;
      } else if (totalScore === 17) {
        selectedIndex = 11;
      } else {
        selectedIndex = 12; // 18-20
      }
      
      // Modalı göster
      modal.style.display = "block";
      // Önceki mesajı temizle
      resultText.textContent = "";
  
      // Slayt gösterisi ayarları: 0.1s aralık, toplam 3s
      const intervalTime = 100;   // 0.1 saniye
      const totalTime = 3000;     // 3 saniye
      const maxFrames = totalTime / intervalTime; // 30 kare
      let frameCount = 0;
      let slideIndex = 0;
  
      const slideShow = setInterval(() => {
        if (frameCount < maxFrames) {
          // Sıradaki Spartan resmini göster
          resultImage.src = spartansData[slideIndex].src;
          // Sıradaki resim indeksine geç
          slideIndex = (slideIndex + 1) % spartansData.length;
          frameCount++;
        } else {
          // Slayt gösterisini durdur
          clearInterval(slideShow);
          // Nihai sonucu göster
          resultImage.src = spartansData[selectedIndex].src;
          resultText.textContent = spartansData[selectedIndex].message;
        }
      }, intervalTime);
    });
  
    // Modal kapatma butonu
    modalCloseBtn.addEventListener("click", function() {
      modal.style.display = "none";
    });
  
    // "Restart" butonu: formu sıfırla ve modalı kapat
    restartBtn.addEventListener("click", function() {
      form.reset();
      modal.style.display = "none";
    });
  
    // İsteğe bağlı: Modal içeriğinin dışına tıklayınca kapat
    window.addEventListener("click", function(e) {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });
  