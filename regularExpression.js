// Ornek cumle: Burada neler oluyor ? burda cok fazla sey oluyor.

/o/ // ---> Cumledeki ilk 'o' ya geldiginde durur cunku flag atanmamis default degerdedir.

/o/g // ---> flag g yani "global" olarak atanmis cumledeki butun 'o' lari secer

/o+/g //---> buradaki '+' isareti cumlede eger arka arkaya gelen 1 den fazla 'o' varsa bunlari tek tek secmek yerine tek bir   grup halinde secer

/bura?da/g //---> 'burada' ve 'burda' anlam olarak birbirinin aynisi fakat yazim olarak farkliliklari var ve 'a' opsiyonel oldugundan soru isareti ile bunu belirtebilirm

/o*/g //----> bu da soru isareti ile artinin birlesimidir.

/./g //-----> Butun karakterleri tek tek secer.

/.o./g //----> 'o' yu sec fakat o dan once ve sonra bir karakter daha sec demek.

/\w/g //----> bu regex alpha numeric ve underscore herseyi alir.

/\W/g //----> bu ise tam resi.

/\s/g //----> sadece space leri alir kucuk 's' yerine buyuk 'S' yazarsan tam tersi.

/\d/g //----> tek tek butun digit yani sayilari secer.

/.{2}/g //----> butun cumledeki karakterleri 2 serli grupla