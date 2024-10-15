# Netflix-Klon mit Next.js und Firebase

## Überblick

Dies ist ein Netflix-Klon, der mit **Next.js** erstellt wurde und Film- und Serieninformationen von **Firebase** abruft. Die Anwendung zeigt eine Sammlung von Filmen und TV-Serien an, sortiert nach Kategorien wie "Beliebt", "Trendig" und "Neuerscheinungen". Benutzer können detaillierte Informationen zu jedem Film/Serie anzeigen, Trailer abspielen und sich über ähnliche Titel informieren.

## Features

- Anzeige von Filmen und TV-Serien mit Informationen wie Titel, Beschreibung, Bewertung, Veröffentlichungsdatum und Trailer.
- Kategorien wie "Beliebt", "Trendig", "Top bewertet" und "Neuerscheinungen".
- Detailseiten für jeden Film/jede Serie mit zusätzlichen Informationen und verwandten Titeln.
- Responsives Design: Optimiert für Desktop, Tablet und Mobilgeräte.
- Server Side Rendering (SSR) mit Next.js für bessere Performance und SEO.
  
## Verwendete Technologien

- **Next.js**: React-basiertes Framework für die Erstellung von SSR- und statischen Webseiten.
- **Firebase**: Backend-as-a-Service, das als Datenbank und API für die Filmdaten verwendet wird.
- **Firebase Auth**: Authentifizierungssystem, falls Benutzeranmeldung erforderlich ist.
- **Tailwind CSS**: Utility-First CSS-Framework für ein responsives und modernes Design.
- **Vercel**: Deployment der Anwendung auf Vercel oder einem anderen Hosting-Anbieter.

## Installation

1. Klone das Repository:
    ```bash
    git clone https://github.com/dein-repository/netflix-klon.git
    ```
   
2. Installiere die Abhängigkeiten:
    ```bash
    npm install
    ```
   
3. Erstelle eine `.env.local` Datei und füge deine Firebase-Konfigurationsvariablen hinzu:
    ```
    NEXT_PUBLIC_FIREBASE_API_KEY=dein_api_key
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=dein_auth_domain
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=dein_project_id
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=dein_storage_bucket
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=deine_messaging_sender_id
    NEXT_PUBLIC_FIREBASE_APP_ID=deine_app_id
    NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=deine_measurement_id
    ```

4. Starte den Entwicklungsserver:
    ```bash
    npm run dev
    ```

5. Öffne den Browser und gehe zu `http://localhost:3000`, um die Anwendung zu sehen.

## Firebase Konfiguration

Die Anwendung verwendet **Firebase**, um Filmdaten und Serieninformationen zu speichern und abzurufen. Um Firebase zu konfigurieren, musst du ein Firebase-Projekt erstellen und die oben genannten Umgebungsvariablen (`.env.local`) in dein Projekt einfügen. Gehe auf [Firebase Console](https://console.firebase.google.com/), um dein Projekt zu verwalten.

## Screenshots




