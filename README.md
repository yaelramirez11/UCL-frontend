# UCL Pulse

Aplicación front-end del proyecto final de TripleTen. Muestra partidos de la UEFA Champions League con datos de [football-data.org](https://www.football-data.org/).

## Páginas

- `/` — descripción del proyecto
- `/partidos` — resultados de la API (búsqueda, preloader, mostrar más)

## Desarrollo

```bash
npm install
npm run dev
```

Crea un archivo `.env` (no se sube a Git):

```env
VITE_FOOTBALL_DATA_TOKEN=tu_token
```

## Despliegue

La app está preparada para Netlify (proxy a football-data.org). Cuando esté publicada, el enlace irá aquí.
