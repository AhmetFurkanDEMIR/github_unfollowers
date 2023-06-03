![](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) ![](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white) ![](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white) ![](https://img.shields.io/badge/Azure_DevOps-0078D7?style=for-the-badge&logo=azure-devops&logoColor=white) ![]()

# [GitHub Unfollowers](https://batuhanturk.tech/)

Bu web sitesi, GitHub hesabınızla ilgili detaylı bilgiler sunabilir ve sizi geri takip etmeyen kullanıcıları tespit ederek takibi bırakmanızı sağlayabilir.

Web sitesi, GitHub hesabınızı analiz ederek size ayrıntılı bilgiler sağlar. Hesabınızın genel performansını, popüler projelerinizi, katkılarınızı ve etkileşimlerinizi görsel olarak sunabilir.

Web sitesi ayrıca, geri takip etmeyen kullanıcıları tespit edip takibi bırakmanızı sağlar. Bu özellik sayesinde, sizi takip etmeyen ve etkileşimde bulunmayan kullanıcıları belirleyebilir ve bunları otomatik olarak takipten çıkarabilirsiniz. Böylece takip listenizi daha düzenli tutabilir ve daha gerçekçi bir takipçi sayısına sahip olabilirsiniz.

---

Web sitesi Html, Css, JS ve Bootstrap ile yazılmıştır. GitHub üzerinden kullanıcı verilerini çekmek için GitHub API kullanılmıştır.


**CI/CD (Sürekli Entegrasyon/Sürekli Dağıtım)** ile geliştirme yapmak için Azure DevOps ve Azure Static Web Apps kullanılarak iki farklı yöntem denendi.

Birinci yöntemde, kaynak olarak Azure Repos Git kullanıldı. Azure Repos Git, Git tabanlı bir kod deposu sağlar ve Azure DevOps ile entegre olarak kullanılabilir. Bu yöntemde, geliştirme için Azure DevOps üzerinde bir pipeline oluşturuldu. Bu pipeline, kodu otomatik olarak derleyip test ederek sürekli bir entegrasyon sağladı. Ardından, başarıyla geçen kod değişiklikleri otomatik olarak dağıtıldı.

İkinci yöntemde ise, kaynak olarak GitHub kullanıldı ve geliştirme ortamı Azure Static Web Apps üzerinde sağlandı. Azure Static Web Apps, statik web siteleri için hızlı ve basit bir dağıtım platformudur. Bu yöntemde, geliştirme ortamı GitHub reposundaki kod değişikliklerini algılayarak otomatik olarak güncelleniyor. Herhangi bir kod değişikliği yapıldığında, Azure Static Web Apps yeni bir geliştirme ortamı oluşturuyor ve bu ortamda değişiklikler derlenerek dağıtılıyor.

Her iki yöntem de CI/CD prensiplerini uygulayarak sürekli geliştirme ve hızlı dağıtım sağladı. Ancak, birinci yöntemde Azure Repos Git ve Azure DevOps kullanılırken, ikinci yöntemde GitHub ve Azure Static Web Apps kullanıldı. Her iki yöntem de farklı tercihlere ve ihtiyaçlara uygun olarak kullanılabilir.