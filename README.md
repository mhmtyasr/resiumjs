# ResiumJS CDN Kullanımı

Bu repo, ResiumJS'in CDN üzerinden kullanımını sağlamak amacıyla oluşturulmuştur. İlgili bağımlılıkları ekleyerek ve gerekli konfigürasyonları yaparak, CesiumJS ile doğrudan bir bağlantı olmadan ResiumJS'i kullanabilirsiniz.

## Kurulum

CDN üzerinden çalışmak için aşağıdaki adımları takip edebilirsiniz.

1. HTML dosyanızın `<head>` bölümüne aşağıdaki satırı ekleyin:

   ```html
   <script src="https://cdnjs.cloudflare.com/ajax/libs/cesium/1.107.2/Cesium.js"></script>
   <script>
     window.CESIUM_BASE_URL = 'https://cdnjs.cloudflare.com/ajax/libs/cesium/1.107.2';
   </script>

2.Ardından, ResiumJS'in gerekli bağımlılıklarını ekleyin:

<script src="https://unpkg.com/react@17/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/resium@1/umd/resium.min.js"></script>

3.ResiumJS kullanımına başlayabilirsiniz. Örneğin:

const { Viewer, Entity } = resium;

// ... Diğer kodlarınız ...


Örnek Kodlar
Bu depoda, CDN üzerinden ResiumJS kullanımına dair örnek kodları bulabilirsiniz. İlgili kodları inceleyerek, projenizi bu yönde geliştirebilirsiniz.

Katkılar
Eğer bu README veya örnek kodlar hakkında düzeltmeler veya eklemeler yapmak istiyorsanız, lütfen bir pull request oluşturun.



Bu README dosyasını kendi projenizin kök dizinine `README.md` olarak kaydedebilirsiniz.
