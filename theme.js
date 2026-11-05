// Применяем сохранённую тему до загрузки CSS, чтобы не мигал светлый фон.
try {
  const theme=JSON.parse(localStorage.getItem('pereplet:state:v1')||'{}').theme;
  if(['day','night','pink'].includes(theme))document.documentElement.dataset.theme=theme;
}catch{}
