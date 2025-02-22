function submitForm(event) {
  event.preventDefault(); // Formun normalde sayfayı yenilemesini engelle

  // Form verilerini al
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // mailto linkini oluştur
  var mailtoLink = `mailto:muharremttr6053@gmail.com?subject=İletişim Formu - ${name}&body=Adı: ${name}%0AEmail: ${email}%0AMesaj: ${message}`;

  // Mailto linkine yönlendir
  window.location.href = mailtoLink;

  // Hata kontrolü: Mailto linki oluştu mu?
  console.log(mailtoLink);
}