﻿# hannl

https://han-devteam.netlify.com/

---

## Typography

In fonts.scss zijn de mixins van de fonts gedefinieerd
- bigtitle
- h1 t/m h5
- title1 t/m title4
- eyebrow
- lead
- p
- base

In demo-typo.scss is te zien hoe de mixins ingezet kunnen worden in een component. Elk element krijgt een class (h1.demo) en deze krijgt z'n eigen opmaak:

.demo {
  @include h1;
  color: $hanred;
}

Ook is in libs margins.scss aangemaakt met daarin de standaard margins. Is nu nog vrij basaal, maar zal waarschijnlijk nog veel uitgebreider worden.
