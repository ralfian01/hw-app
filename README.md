<h1 style="text-align: center; border-bottom: 1px solid #dedede;">Final Project Semester 4 Ionic-Mobile</h1>

<h2 style="font-family: Arial, Helvetica, sans-serif;"> ## Stylesheet : </h2>
<p style="font-family: Arial, Helvetica, sans-serif;">
	- Sass : <a style="text-decoration: none; font-weight: 600; color: #ef00f3;" href="https://sass-lang.com/">SCSS</a>
</p>
<h4 style="font-family: Arial, Helvetica, sans-serif;">FrameWork Style : </h4>
<p style="font-family: Arial, Helvetica, sans-serif;">
	- Tailwind Css : <a style="text-decoration: none; font-weight: 600; color: #00f392;" href="https://tailwindcss.com">TailwindCss</a>
</p>
<h4 style="font-family: Arial, Helvetica, sans-serif;">Component Tailwind : </h4>
<p style="font-family: Arial, Helvetica, sans-serif;">
	- DaisyUI : <a style="text-decoration: none; font-weight: 600; color: #00f392;" href="https://daisyui.com/">DaisyUI</a>
</p>


## Struktur Folder
```
📦src
 ┣ 📂components
 ┃ ┣ 📂Elements
 ┃ ┃ ┣ 📂Button
 ┃ ┃ ┃ ┣ 📜ButtonPaket.tsx
 ┃ ┃ ┃ ┗ 📜ButtonTab.tsx
 ┃ ┃ ┣ 📂Card
 ┃ ┃ ┃ ┣ 📜Card.scss
 ┃ ┃ ┃ ┗ 📜Card.tsx
 ┃ ┃ ┗ 📂Slide
 ┃ ┃ ┃ ┣ 📜Slide.scss
 ┃ ┃ ┃ ┗ 📜Slide.tsx
 ┃ ┣ 📂Fragments
 ┃ ┃ ┣ 📂Banner
 ┃ ┃ ┃ ┗ 📜Banner.tsx
 ┃ ┃ ┣ 📂Collection
 ┃ ┃ ┃ ┗ 📜Collection.tsx
 ┃ ┃ ┣ 📂Footer
 ┃ ┃ ┃ ┗ 📜Footer.tsx
 ┃ ┃ ┣ 📂Header
 ┃ ┃ ┃ ┗ 📜Header.tsx
 ┃ ┃ ┗ 📂Package
 ┃ ┃ ┃ ┗ 📜Package.tsx
 ┃ ┗ 📂Layouts
 ┃ ┃ ┣ 📂Coba
 ┃ ┃ ┃ ┣ 📜UserDetailPage.tsx
 ┃ ┃ ┃ ┗ 📜UsersListPage.tsx
 ┃ ┃ ┣ 📜AuthLayouts.tsx
 ┃ ┃ ┣ 📜BerandaLayouts.tsx
 ┃ ┃ ┣ 📜PaketLayouts.tsx
 ┃ ┃ ┣ 📜PortofolioLayouts.tsx
 ┃ ┃ ┗ 📜ProfileLayouts.tsx
 ┣ 📂data
 ┃ ┗ 📜data.tsx
 ┣ 📂features
 ┃ ┣ 📂auth
 ┃ ┃ ┣ 📜authSlice.ts
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜thunks.ts
 ┃ ┣ 📂package
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┣ 📜packageSlice.ts
 ┃ ┃ ┗ 📜thuks.ts
 ┃ ┗ 📂ui
 ┃ ┃ ┗ 📜uiSlice.ts
 ┣ 📂hooks
 ┃ ┗ 📜useToggleTabs.ts
 ┣ 📂lib
 ┃ ┗ 📜axios.ts
 ┣ 📂pages
 ┃ ┣ 📂Auth
 ┃ ┃ ┣ 📜Login.tsx
 ┃ ┃ ┗ 📜Register.tsx
 ┃ ┣ 📜Coba.tsx
 ┃ ┣ 📜Collection.tsx
 ┃ ┣ 📜Home.tsx
 ┃ ┣ 📜Paket.tsx
 ┃ ┣ 📜Portofolio.tsx
 ┃ ┣ 📜Profile.tsx
 ┃ ┗ 📜SplashScreen.tsx
 ┣ 📂services
 ┃ ┗ 📜auth.services.ts
 ┣ 📂store
 ┃ ┗ 📜index.ts
 ┣ 📂theme
 ┃ ┣ 📜tailwind.css
 ┃ ┗ 📜variables.scss
 ┣ 📜App.test.tsx
 ┣ 📜App.tsx
 ┣ 📜main.tsx
 ┣ 📜routes.tsx
 ┣ 📜setupTests.ts
 ┗ 📜vite-env.d.ts
```
## Capacitor Plugins

- 🟩 [@capacitor/app@6.0.0](https://github.com/ionic-team/capacitor-plugins.git)
- 🟩 [@capacitor/haptics@6.0.0](https://github.com/ionic-team/capacitor-plugins.git)
- 🟩 [@capacitor/keyboard@6.0.0](https://github.com/ionic-team/capacitor-plugins.git)
- 🟩 [@capacitor/status-bar@6.0.0](https://github.com/ionic-team/capacitor-plugins.git)


## Dependencies

- 🟩 [@capacitor/android@6.0.0](https://github.com/ionic-team/capacitor.git)
- 🟩 [@capacitor/assets@3.0.5](https://github.com/ionic-team/capacitor-assets.git)
- 🟩 [@capacitor/cli@6.0.0](https://github.com/ionic-team/capacitor.git)
- 🟩 [@capacitor/core@6.0.0](https://github.com/ionic-team/capacitor.git)
- 🟧 @codesyntax/ionic-react-photo-viewer@1.14.0 - May be unmaintained (1.1 years since last release)
- 🟩 [@ionic/react@8.0.1](https://github.com/ionic-team/ionic-framework.git) - (Latest 8.2.0)
- 🟩 [@ionic/react-router@8.0.1](https://github.com/ionic-team/ionic-framework.git) - (Latest 8.2.0)
- 🟩 [@reduxjs/toolkit@2.2.3](https://github.com/reduxjs/redux-toolkit.git) - (Latest 2.2.5)
- 🟩 [@testing-library/dom@10.1.0](https://github.com/testing-library/dom-testing-library.git)
- 🟧 [@testing-library/jest-dom@5.17.0](https://github.com/testing-library/jest-dom.git) - (Latest 6.4.5) - Is behind 1 major version.
- 🟧 [@testing-library/react@14.3.1](https://github.com/testing-library/react-testing-library.git) - (Latest 15.0.7) - Is behind 1 major version.
- 🟩 [@testing-library/user-event@14.5.2](https://github.com/testing-library/user-event.git)
- 🟩 [@types/react@18.3.1](https://github.com/DefinitelyTyped/DefinitelyTyped.git) - (Latest 18.3.3)
- 🟩 [@types/react-dom@18.3.0](https://github.com/DefinitelyTyped/DefinitelyTyped.git)
- 🟧 [@types/react-router@5.1.20](https://github.com/DefinitelyTyped/DefinitelyTyped.git) - May be unmaintained (1.4 years since last release)
- 🟥 [@types/react-router-dom@5.3.3](https://github.com/DefinitelyTyped/DefinitelyTyped.git) - Unmaintained (2.4 years since last release)
- 🟩 [@vitejs/plugin-legacy@5.3.2](https://github.com/vitejs/vite.git) - (Latest 5.4.1)
- 🟩 [@vitejs/plugin-react@4.2.1](https://github.com/vitejs/vite-plugin-react.git) - (Latest 4.3.0)
- 🟩 [autoprefixer@10.4.19](https://github.com/postcss/autoprefixer.git)
- 🟩 [axios@1.6.8](https://github.com/axios/axios.git) - (Latest 1.7.2)
- 🟩 [cypress@13.8.1](https://github.com/cypress-io/cypress.git) - (Latest 13.10.0)
- 🟩 [daisyui@4.10.2](https://github.com/saadeghi/daisyui.git) - (Latest 4.11.1)
- 🟧 [eslint@8.57.0](https://github.com/eslint/eslint.git) - (Latest 9.4.0) - Is behind 1 major version.
- 🟩 [eslint-plugin-react@7.34.1](https://github.com/jsx-eslint/eslint-plugin-react.git) - (Latest 7.34.2)
- 🟩 [ionicons@7.3.1](https://github.com/ionic-team/ionicons.git) - (Latest 7.4.0)
- 🟧 [jsdom@22.1.0](https://github.com/jsdom/jsdom.git) - (Latest 24.1.0) - Is behind 2 major versions.
- 🟩 [postcss@8.4.38](https://github.com/postcss/postcss.git)
- 🟩 [react@18.3.1](https://github.com/facebook/react.git)
- 🟩 [react-dom@18.3.1](https://github.com/facebook/react.git)
- 🟩 [react-redux@9.1.1](https://github.com/reduxjs/react-redux.git) - (Latest 9.1.2)
- 🟧 [react-router@5.3.4](https://github.com/remix-run/react-router.git) - (Latest 6.23.1) - Is behind 1 major version.
- 🟧 [react-router-dom@5.3.4](https://github.com/remix-run/react-router.git) - (Latest 6.23.1) - Is behind 1 major version.
- 🟩 [redux@5.0.1](https://github.com/reduxjs/redux.git)
- 🟩 [sass@1.75.0](https://github.com/sass/dart-sass.git) - (Latest 1.77.4)
- 🟩 [swiper@11.1.1](https://github.com/nolimits4web/Swiper.git) - (Latest 11.1.4)
- 🟩 [tailwindcss@3.4.3](https://github.com/tailwindlabs/tailwindcss.git)
- 🟩 [terser@5.31.0](https://github.com/terser/terser.git)
- 🟩 [typescript@5.4.5](https://github.com/Microsoft/TypeScript.git)
- 🟩 [vite@5.2.10](https://github.com/vitejs/vite.git) - (Latest 5.2.12)
- 🟧 [vitest@0.34.6](https://github.com/vitest-dev/vitest.git) - (Latest 1.6.0) - Is behind 1 major version.