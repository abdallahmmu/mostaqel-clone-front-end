import React from "react";

export default function Trusted({ t }) {
  return (
    <section
      id="trusted"
      data-aos="fade-down"
      data-aos-anchor-placement="top-center"
      data-aos-duration="400"
    >
      <div className="container">
        {/*Start Trusted Container*/}
        <h1 className="fw-bold fs-3 text-center mb-5">{t("Trusted By")}</h1>
        <div className="row">
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="text-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={90}
                height={32}
                viewBox="0 0 512 110"
              >
                <path
                  fill="#706D6E"
                  d="M512 49.449v-9.005h-11.182V26.446l-.376.115l-10.503 3.214l-.206.063v10.606h-16.577v-5.908c0-2.751.615-4.857 1.828-6.26c1.204-1.388 2.926-2.093 5.122-2.093c1.58 0 3.214.372 4.86 1.105l.412.184V17.99l-.194-.07c-1.535-.553-3.623-.83-6.21-.83c-3.262 0-6.225.709-8.81 2.116a15.052 15.052 0 0 0-6.045 5.976c-1.42 2.554-2.14 5.503-2.14 8.767v6.496h-7.786v9.005h7.786v37.933h11.177V49.449h16.577v24.106c0 9.928 4.682 14.96 13.918 14.96a22.79 22.79 0 0 0 4.746-.528c1.66-.357 2.79-.714 3.456-1.095l.147-.087v-9.088l-.454.301c-.607.405-1.362.735-2.248.98c-.89.25-1.633.376-2.208.376c-2.164 0-3.764-.583-4.758-1.734c-1.004-1.16-1.514-3.191-1.514-6.031v-22.16H512Zm-82.768 29.926c-4.057 0-7.255-1.346-9.51-3.995c-2.267-2.664-3.417-6.46-3.417-11.285c0-4.977 1.15-8.872 3.419-11.583c2.255-2.692 5.423-4.059 9.417-4.059c3.875 0 6.96 1.305 9.17 3.882c2.221 2.589 3.348 6.453 3.348 11.488c0 5.097-1.06 9.013-3.15 11.632c-2.075 2.6-5.196 3.92-9.277 3.92Zm.498-40.062c-7.74 0-13.888 2.268-18.27 6.741c-4.381 4.474-6.602 10.664-6.602 18.402c0 7.349 2.168 13.26 6.444 17.567c4.276 4.308 10.096 6.49 17.295 6.49c7.503 0 13.528-2.299 17.91-6.834c4.38-4.53 6.6-10.662 6.6-18.22c0-7.463-2.083-13.418-6.192-17.696c-4.112-4.28-9.895-6.45-17.185-6.45Zm-42.894 0c-5.265 0-9.62 1.347-12.947 4.002c-3.346 2.671-5.044 6.175-5.044 10.414c0 2.203.366 4.16 1.088 5.82c.725 1.666 1.848 3.132 3.34 4.363c1.48 1.221 3.765 2.5 6.794 3.8c2.545 1.048 4.444 1.935 5.65 2.633c1.179.685 2.016 1.373 2.488 2.043c.459.655.692 1.553.692 2.66c0 3.154-2.361 4.688-7.22 4.688c-1.803 0-3.859-.376-6.111-1.118a22.972 22.972 0 0 1-6.257-3.173l-.464-.332v10.76l.17.08c1.582.73 3.576 1.345 5.926 1.83c2.346.484 4.476.731 6.328.731c5.713 0 10.314-1.353 13.67-4.024c3.38-2.69 5.092-6.275 5.092-10.662c0-3.163-.922-5.877-2.74-8.065c-1.803-2.17-4.935-4.163-9.303-5.924c-3.48-1.397-5.71-2.556-6.629-3.446c-.887-.86-1.337-2.076-1.337-3.615c0-1.366.556-2.459 1.697-3.345c1.15-.89 2.75-1.343 4.756-1.343c1.863 0 3.768.294 5.663.87c1.894.577 3.556 1.35 4.945 2.294l.456.312V41.358l-.175-.075c-1.28-.55-2.97-1.02-5.02-1.4c-2.044-.378-3.897-.57-5.508-.57Zm-47.13 40.062c-4.056 0-7.255-1.346-9.509-3.995c-2.268-2.664-3.415-6.46-3.415-11.285c0-4.977 1.148-8.872 3.418-11.583c2.253-2.692 5.42-4.059 9.416-4.059c3.875 0 6.96 1.305 9.17 3.882c2.221 2.589 3.348 6.453 3.348 11.488c0 5.097-1.06 9.013-3.15 11.632c-2.076 2.6-5.196 3.92-9.278 3.92Zm.499-40.062c-7.742 0-13.89 2.268-18.27 6.741c-4.38 4.474-6.603 10.664-6.603 18.402c0 7.352 2.17 13.26 6.445 17.567c4.276 4.308 10.095 6.49 17.296 6.49c7.5 0 13.528-2.299 17.91-6.834c4.379-4.53 6.6-10.662 6.6-18.22c0-7.463-2.084-13.418-6.194-17.696c-4.113-4.28-9.895-6.45-17.184-6.45Zm-41.84 9.26v-8.129h-11.041v46.937h11.04V63.37c0-4.083.926-7.437 2.753-9.97c1.803-2.503 4.207-3.772 7.14-3.772c.995 0 2.111.164 3.32.489c1.197.322 2.064.672 2.575 1.04l.464.337v-11.13l-.18-.077c-1.027-.437-2.482-.657-4.322-.657c-2.775 0-5.258.891-7.384 2.646c-1.867 1.543-3.217 3.659-4.248 6.297h-.117Zm-30.813-9.26c-5.065 0-9.584 1.087-13.427 3.228c-3.85 2.145-6.829 5.21-8.855 9.105c-2.017 3.887-3.041 8.427-3.041 13.49c0 4.434.993 8.504 2.955 12.09c1.964 3.593 4.744 6.404 8.262 8.354c3.514 1.947 7.575 2.934 12.07 2.934c5.247 0 9.727-1.049 13.32-3.117l.144-.084V75.198l-.463.339a20.766 20.766 0 0 1-5.402 2.812c-1.952.681-3.73 1.025-5.29 1.025c-4.333 0-7.81-1.355-10.335-4.027c-2.53-2.677-3.813-6.434-3.813-11.163c0-4.758 1.338-8.612 3.974-11.457c2.629-2.835 6.113-4.273 10.356-4.273c3.629 0 7.165 1.229 10.51 3.656l.463.336V41.788l-.149-.084c-1.26-.705-2.976-1.287-5.108-1.728c-2.122-.44-4.198-.663-6.171-.663Zm-32.927 1.131h-11.042v46.937h11.042V40.444Zm-5.408-19.995c-1.817 0-3.402.619-4.704 1.844c-1.308 1.23-1.972 2.778-1.972 4.604c0 1.798.656 3.317 1.95 4.514c1.287 1.193 2.877 1.798 4.726 1.798c1.848 0 3.444-.605 4.746-1.796c1.31-1.199 1.975-2.718 1.975-4.516c0-1.762-.647-3.295-1.921-4.554c-1.273-1.257-2.889-1.894-4.8-1.894Zm-27.548 16.533V87.38h11.268V21.886h-15.595l-19.823 48.647l-19.236-48.647h-16.23v65.495h10.589V36.977h.364l20.313 50.404h7.99l19.996-50.4h.364Z"
                />
                <path fill="#F1511B" d="M51.939 51.939H0V0h51.939z" />
                <path fill="#80CC28" d="M109.287 51.939H57.348V0h51.939z" />
                <path fill="#00ADEF" d="M51.938 109.307H0V57.368h51.938z" />
                <path
                  fill="#FBBC09"
                  d="M109.287 109.307H57.348V57.368h51.939z"
                />
              </svg>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="text-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={90}
                height={32}
                viewBox="0 0 256 153"
              >
                <path
                  fill="#252F3E"
                  d="M72.392 55.438c0 3.137.34 5.68.933 7.545a45.373 45.373 0 0 0 2.712 6.103c.424.678.593 1.356.593 1.95c0 .847-.508 1.695-1.61 2.543l-5.34 3.56c-.763.509-1.526.763-2.205.763c-.847 0-1.695-.424-2.543-1.187a26.224 26.224 0 0 1-3.051-3.984c-.848-1.44-1.696-3.052-2.628-5.001c-6.612 7.798-14.92 11.698-24.922 11.698c-7.12 0-12.8-2.035-16.954-6.103c-4.153-4.07-6.272-9.495-6.272-16.276c0-7.205 2.543-13.054 7.714-17.462c5.17-4.408 12.037-6.612 20.768-6.612c2.882 0 5.849.254 8.985.678c3.137.424 6.358 1.102 9.749 1.865V29.33c0-6.443-1.357-10.935-3.985-13.563c-2.712-2.628-7.29-3.9-13.817-3.9c-2.967 0-6.018.34-9.155 1.103c-3.136.762-6.188 1.695-9.155 2.882c-1.356.593-2.373.932-2.967 1.102c-.593.17-1.017.254-1.356.254c-1.187 0-1.78-.848-1.78-2.628v-4.154c0-1.356.17-2.373.593-2.966c.424-.594 1.187-1.187 2.374-1.78c2.967-1.526 6.527-2.798 10.68-3.815C33.908.763 38.316.255 42.978.255c10.088 0 17.463 2.288 22.21 6.866c4.662 4.577 7.036 11.528 7.036 20.853v27.464h.17ZM37.976 68.323c2.798 0 5.68-.508 8.731-1.526c3.052-1.017 5.765-2.882 8.053-5.425c1.357-1.61 2.374-3.39 2.882-5.425c.509-2.034.848-4.493.848-7.375v-3.56a70.791 70.791 0 0 0-7.799-1.441a63.874 63.874 0 0 0-7.968-.509c-5.68 0-9.833 1.102-12.63 3.391c-2.798 2.289-4.154 5.51-4.154 9.748c0 3.984 1.017 6.951 3.136 8.986c2.035 2.119 5.002 3.136 8.901 3.136Zm68.069 9.155c-1.526 0-2.543-.254-3.221-.848c-.678-.508-1.272-1.695-1.78-3.305L81.124 7.799c-.51-1.696-.764-2.798-.764-3.391c0-1.356.678-2.12 2.035-2.12h8.307c1.61 0 2.713.255 3.306.848c.678.509 1.187 1.696 1.695 3.306l14.241 56.117l13.224-56.117c.424-1.695.933-2.797 1.61-3.306c.679-.508 1.866-.847 3.392-.847h6.781c1.61 0 2.713.254 3.39.847c.679.509 1.272 1.696 1.611 3.306l13.394 56.795L168.01 6.442c.508-1.695 1.102-2.797 1.695-3.306c.678-.508 1.78-.847 3.306-.847h7.883c1.357 0 2.12.678 2.12 2.119c0 .424-.085.848-.17 1.356c-.085.509-.254 1.187-.593 2.12l-20.43 65.525c-.508 1.696-1.101 2.798-1.78 3.306c-.678.509-1.78.848-3.22.848h-7.29c-1.611 0-2.713-.254-3.392-.848c-.678-.593-1.271-1.695-1.61-3.39l-13.14-54.676l-13.054 54.59c-.423 1.696-.932 2.798-1.61 3.391c-.678.594-1.865.848-3.39.848h-7.291Zm108.927 2.289c-4.408 0-8.816-.509-13.054-1.526c-4.239-1.017-7.544-2.12-9.748-3.39c-1.357-.764-2.29-1.611-2.628-2.374a5.983 5.983 0 0 1-.509-2.374V65.78c0-1.78.678-2.628 1.95-2.628a4.8 4.8 0 0 1 1.526.255c.508.17 1.271.508 2.119.847a46.108 46.108 0 0 0 9.324 2.967a50.907 50.907 0 0 0 10.088 1.017c5.34 0 9.494-.932 12.376-2.797c2.882-1.865 4.408-4.577 4.408-8.053c0-2.373-.763-4.323-2.289-5.934c-1.526-1.61-4.408-3.051-8.561-4.408l-12.292-3.814c-6.188-1.95-10.765-4.832-13.563-8.647c-2.797-3.73-4.238-7.883-4.238-12.291c0-3.56.763-6.697 2.289-9.41c1.525-2.712 3.56-5.085 6.103-6.95c2.543-1.95 5.425-3.391 8.816-4.408c3.39-1.017 6.95-1.441 10.68-1.441c1.865 0 3.815.085 5.68.339c1.95.254 3.73.593 5.51.932c1.695.424 3.306.848 4.832 1.357c1.526.508 2.712 1.017 3.56 1.525c1.187.679 2.034 1.357 2.543 2.12c.509.678.763 1.61.763 2.797v3.984c0 1.78-.678 2.713-1.95 2.713c-.678 0-1.78-.34-3.22-1.018c-4.833-2.204-10.258-3.306-16.276-3.306c-4.832 0-8.647.763-11.275 2.374c-2.627 1.61-3.984 4.069-3.984 7.544c0 2.374.848 4.408 2.543 6.019c1.696 1.61 4.832 3.221 9.325 4.662l12.037 3.815c6.103 1.95 10.511 4.662 13.139 8.137c2.628 3.476 3.9 7.46 3.9 11.868c0 3.645-.764 6.951-2.205 9.833c-1.525 2.882-3.56 5.425-6.188 7.46c-2.628 2.119-5.764 3.645-9.409 4.747c-3.815 1.187-7.799 1.78-12.122 1.78Z"
                />
                <path
                  fill="#F90"
                  d="M230.993 120.964c-27.888 20.599-68.408 31.534-103.247 31.534c-48.827 0-92.821-18.056-126.05-48.064c-2.628-2.373-.255-5.594 2.881-3.73c35.942 20.854 80.276 33.484 126.136 33.484c30.94 0 64.932-6.442 96.212-19.666c4.662-2.12 8.646 3.052 4.068 6.442Zm11.614-13.224c-3.56-4.577-23.566-2.204-32.636-1.102c-2.713.34-3.137-2.034-.678-3.814c15.936-11.19 42.13-7.968 45.181-4.239c3.052 3.815-.848 30.008-15.767 42.554c-2.288 1.95-4.492.933-3.475-1.61c3.39-8.393 10.935-27.296 7.375-31.789Z"
                />
              </svg>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="text-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={90}
                height={32}
                viewBox="0 0 512 161"
              >
                <path
                  fill="#FF385C"
                  d="M147.508 113.996c-.72-2.022-1.562-3.978-2.363-5.79a540.89 540.89 0 0 0-3.772-8.282l-.1-.215a1852.883 1852.883 0 0 0-35.53-72.668l-.529-1.024a472.824 472.824 0 0 0-3.926-7.505A48.76 48.76 0 0 0 95.51 9.62a26.897 26.897 0 0 0-9.248-7.098a26.951 26.951 0 0 0-22.776.003a26.895 26.895 0 0 0-9.246 7.1a48.97 48.97 0 0 0-5.773 8.89a480.76 480.76 0 0 0-3.962 7.574l-.49.95A1854.565 1854.565 0 0 0 8.484 99.71l-.162.35a547.21 547.21 0 0 0-3.709 8.145c-.8 1.811-1.641 3.766-2.362 5.793a35.508 35.508 0 0 0-1.916 17.308a34.195 34.195 0 0 0 6.924 16.173a34.282 34.282 0 0 0 14.055 10.606a34.861 34.861 0 0 0 13.151 2.544c1.416 0 2.831-.083 4.238-.247a43.244 43.244 0 0 0 16.172-5.456c6.523-3.665 12.966-9.036 20.004-16.711c7.038 7.675 13.48 13.046 20.004 16.71a43.225 43.225 0 0 0 16.172 5.457a36.67 36.67 0 0 0 4.238.247c4.507.01 8.973-.854 13.15-2.544a34.286 34.286 0 0 0 14.056-10.606a34.194 34.194 0 0 0 6.924-16.173a35.54 35.54 0 0 0-1.915-17.31Zm-72.629 8.367c-8.713-11.044-14.303-21.3-16.265-29.897a26.439 26.439 0 0 1-.56-9.857a16.106 16.106 0 0 1 2.593-6.739a17.952 17.952 0 0 1 6.302-5.15a17.996 17.996 0 0 1 15.862.002a17.95 17.95 0 0 1 6.301 5.15a16.115 16.115 0 0 1 2.593 6.74a26.447 26.447 0 0 1-.562 9.86c-1.964 8.597-7.553 18.85-16.264 29.891Zm64.368 7.489a23.911 23.911 0 0 1-4.841 11.307a23.971 23.971 0 0 1-9.828 7.416a25.051 25.051 0 0 1-12.336 1.614a32.586 32.586 0 0 1-12.317-4.207c-5.807-3.262-11.685-8.27-18.3-15.617c10.53-12.983 17.106-24.95 19.54-35.61a36.568 36.568 0 0 0 .7-13.7a26.272 26.272 0 0 0-4.274-10.985a28.21 28.21 0 0 0-9.989-8.427a28.256 28.256 0 0 0-25.444 0a28.2 28.2 0 0 0-9.99 8.425a26.272 26.272 0 0 0-4.274 10.981a36.583 36.583 0 0 0 .696 13.696c2.433 10.663 9.009 22.634 19.542 35.621c-6.614 7.346-12.492 12.354-18.299 15.617a32.584 32.584 0 0 1-12.317 4.206a25.054 25.054 0 0 1-12.337-1.614a23.972 23.972 0 0 1-9.827-7.415a23.91 23.91 0 0 1-4.84-11.308a25.183 25.183 0 0 1 1.426-12.42c.574-1.616 1.247-3.2 2.08-5.084a542.847 542.847 0 0 1 3.639-7.991l.162-.352a1844.428 1844.428 0 0 1 35.336-72.266l.492-.955c1.26-2.443 2.562-4.97 3.876-7.411a39.647 39.647 0 0 1 4.539-7.087a16.65 16.65 0 0 1 25.631-.002a39.463 39.463 0 0 1 4.54 7.084c1.301 2.42 2.592 4.924 3.841 7.345l.53 1.027a1842.197 1842.197 0 0 1 35.335 72.267l.1.216c1.23 2.663 2.503 5.415 3.701 8.126c.834 1.886 1.508 3.472 2.081 5.082a25.202 25.202 0 0 1 1.426 12.42Zm69.993-8.782c-4.01 0-7.7-.803-11.07-2.411s-6.257-3.86-8.824-6.753c-2.567-2.894-4.492-6.27-5.937-9.969c-1.444-3.859-2.086-8.04-2.086-12.541c0-4.502.803-8.844 2.247-12.703c1.444-3.858 3.53-7.235 6.097-10.29c2.567-2.894 5.615-5.306 9.145-6.914c3.53-1.608 7.22-2.412 11.392-2.412c4.01 0 7.54.804 10.75 2.573c3.209 1.608 5.776 4.02 7.861 7.074l.482-7.878h14.76v60.617h-14.76l-.482-8.843c-2.085 3.215-4.813 5.788-8.343 7.717c-3.209 1.77-7.06 2.734-11.231 2.734Zm3.852-14.47c2.888 0 5.455-.804 7.862-2.251c2.246-1.608 4.01-3.698 5.455-6.27c1.283-2.573 1.925-5.628 1.925-9.005c0-3.377-.642-6.432-1.925-9.004c-1.284-2.573-3.21-4.663-5.455-6.27c-2.247-1.609-4.974-2.252-7.862-2.252s-5.455.804-7.862 2.251c-2.246 1.608-4.011 3.698-5.455 6.27c-1.284 2.573-1.926 5.628-1.926 9.005c0 3.377.642 6.432 1.926 9.004c1.283 2.573 3.209 4.663 5.455 6.27c2.407 1.448 4.974 2.252 7.862 2.252Zm56.156-64.155c0 1.769-.321 3.377-1.124 4.663a9.273 9.273 0 0 1-3.369 3.216c-1.444.804-3.048 1.125-4.652 1.125c-1.605 0-3.21-.321-4.654-1.125a9.273 9.273 0 0 1-3.369-3.216c-.802-1.447-1.123-2.894-1.123-4.663c0-1.768.32-3.376 1.123-4.663c.802-1.447 1.925-2.411 3.37-3.215c1.443-.804 3.048-1.126 4.653-1.126c1.604 0 3.208.322 4.652 1.126a9.272 9.272 0 0 1 3.37 3.215c.641 1.287 1.123 2.734 1.123 4.663Zm-17.168 76.857V58.685h16.044v60.617H252.08Zm58.884-44.7v.162c-.802-.322-1.765-.483-2.568-.643c-.962-.161-1.765-.161-2.727-.161c-4.493 0-7.862 1.286-10.108 4.02c-2.407 2.733-3.53 6.592-3.53 11.576v29.746h-16.044V58.685h14.76l.482 9.165c1.604-3.216 3.53-5.628 6.257-7.396c2.567-1.77 5.615-2.573 9.145-2.573c1.124 0 2.247.16 3.21.321c.48.161.801.161 1.123.322v16.079Zm6.417 44.7v-85.54h16.045v32.64c2.246-2.893 4.813-5.145 8.022-6.913c3.21-1.608 6.74-2.573 10.75-2.573s7.701.804 11.07 2.412c3.37 1.608 6.258 3.859 8.825 6.753c2.568 2.894 4.493 6.271 5.937 9.97c1.444 3.858 2.085 8.038 2.085 12.54c0 4.503-.802 8.844-2.245 12.703c-1.445 3.859-3.53 7.235-6.098 10.29c-2.567 2.895-5.615 5.306-9.145 6.914c-3.53 1.608-7.22 2.412-11.391 2.412c-4.012 0-7.541-.804-10.75-2.573c-3.21-1.608-5.777-4.02-7.862-7.074l-.482 7.878l-14.76.161Zm30.966-12.702c2.889 0 5.456-.804 7.862-2.251c2.246-1.608 4.011-3.698 5.455-6.27c1.284-2.573 1.926-5.628 1.926-9.005c0-3.377-.642-6.432-1.926-9.004c-1.444-2.573-3.209-4.663-5.455-6.27c-2.246-1.609-4.973-2.252-7.862-2.252c-2.888 0-5.455.804-7.861 2.251c-2.247 1.608-4.012 3.698-5.456 6.27c-1.283 2.573-1.925 5.628-1.925 9.005c0 3.377.642 6.432 1.925 9.004c1.284 2.573 3.21 4.663 5.456 6.27c2.406 1.448 4.973 2.252 7.861 2.252Zm37.866 12.702V58.685h14.76l.482 7.879c1.765-2.895 4.171-5.146 7.22-6.914c3.048-1.769 6.578-2.573 10.59-2.573c4.492 0 8.342 1.125 11.551 3.216c3.37 2.09 5.937 5.145 7.702 9.004c1.765 3.859 2.727 8.521 2.727 13.828v36.338h-16.044V85.215c0-4.18-.963-7.557-2.888-9.97c-1.925-2.41-4.493-3.697-7.862-3.697c-2.407 0-4.493.482-6.418 1.608c-1.765 1.125-3.209 2.572-4.332 4.663c-1.123 1.929-1.604 4.34-1.604 6.753v34.73h-15.884Zm63.054 0v-85.54h16.045v32.64c2.246-2.893 4.813-5.145 8.022-6.913c3.21-1.608 6.74-2.573 10.75-2.573c4.012 0 7.702.804 11.071 2.412c3.37 1.608 6.257 3.859 8.824 6.753c2.57 2.894 4.492 6.271 5.938 9.97c1.446 3.858 2.083 8.038 2.083 12.54c0 4.503-.798 8.844-2.244 12.703c-1.445 3.859-3.529 7.235-6.099 10.29c-2.566 2.895-5.614 5.306-9.144 6.914c-3.53 1.608-7.22 2.412-11.391 2.412c-4.011 0-7.541-.804-10.75-2.573c-3.21-1.608-5.776-4.02-7.862-7.074l-.481 7.878l-14.762.161Zm31.127-12.702c2.888 0 5.455-.804 7.862-2.251c2.246-1.608 4.01-3.698 5.455-6.27c1.284-2.573 1.926-5.628 1.926-9.005c0-3.377-.642-6.432-1.926-9.004c-1.283-2.573-3.209-4.663-5.455-6.27c-2.247-1.609-4.974-2.252-7.862-2.252s-5.455.804-7.862 2.251c-2.246 1.608-4.01 3.698-5.455 6.27c-1.444 2.573-1.926 5.628-1.926 9.005c0 3.377.643 6.432 1.926 9.004c1.284 2.573 3.21 4.663 5.455 6.27c2.407 1.448 4.814 2.252 7.862 2.252Z"
                />
              </svg>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="text-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={90}
                height={32}
                viewBox="0 0 512 95"
              >
                <path
                  fill="#0DBDFF"
                  d="M102.607 46.54c0-25.695-20.21-46.54-46.54-46.54c-17.495 0-32.682 9.585-40.65 23.847L38.11 46.54c0-9.932 8.372-17.958 17.957-17.958c10.163 0 17.958 8.026 17.958 17.958c0 9.932-7.853 17.958-17.958 17.958H17.38C7.795 64.498 0 72.293 0 81.878V93.08h56.067c26.157 0 46.54-20.845 46.54-46.54"
                />
                <path
                  fill="#333"
                  d="M314.635 41.054h21.711c8.43 0 12.819-3.984 12.819-11.432c0-7.565-4.389-11.549-12.819-11.549h-21.71v22.981Zm12.53 18.131h-12.53V93.08h-19.459V10.45c0-5.774 4.677-10.451 10.51-10.451h31.238c20.151 0 32.393 12.126 32.393 29.506c0 13.974-7.853 24.598-21.48 28.351l24.251 35.223h-23.327l-21.596-33.895Zm184.832 31.412c-3.811 2.483-8.315 4.215-13.165 4.215c-13.396 0-19.69-9.18-19.69-22.23V4.85l18.42-4.388v72.293c0 3.637 1.79 5.89 5.023 5.89c.981 0 2.079-.232 3.118-.694l6.294 12.646Zm-32.162 0c-3.811 2.483-8.315 4.215-13.166 4.215c-13.396 0-19.69-9.18-19.69-22.23V12.53l18.42-4.562v64.787c0 3.637 1.79 5.89 5.024 5.89c.981 0 2.078-.232 3.118-.694l6.294 12.646Zm-57.8-31.18c0-10.798-6.929-18.247-17.323-18.247c-10.393 0-17.322 7.333-17.322 18.246c0 10.914 6.929 18.247 17.322 18.247c10.394 0 17.323-7.333 17.323-18.247m-53.469 0c0-20.729 15.186-35.222 36.146-35.222s36.262 14.378 36.262 35.222c0 20.903-15.359 35.396-36.262 35.396c-20.96 0-36.146-14.493-36.146-35.396M156.307 55.49l13.28-35.57l13.281 35.57h-26.56Zm-.693-48.907L121.547 93.08h20.671l7.276-19.517h40.13L196.9 93.08h20.671L180.905 0h-15.532a10.543 10.543 0 0 0-9.759 6.583m95.101 71.08c-10.278 0-17.323-7.333-17.323-18.247c0-10.913 7.045-18.246 17.323-18.246s17.323 7.333 17.323 18.246c0 11.202-7.218 18.247-17.323 18.247m16.11-45.097c-4.562-5.312-11.49-8.372-19.863-8.372c-18.016 0-32.393 14.378-32.393 35.107c0 20.902 14.377 35.511 31.873 35.511c9.354 0 16.688-4.1 21.365-10.913l.808 9.18h16.514V0h-7.795c-5.774 0-10.509 4.677-10.509 10.451v22.115Z"
                />
              </svg>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="text-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={90}
                height={32}
                viewBox="0 0 256 83"
              >
                <defs>
                  <linearGradient
                    id="logosVisa0"
                    x1="45.974%"
                    x2="54.877%"
                    y1="-2.006%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#222357" />
                    <stop offset="100%" stopColor="#254AA5" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#logosVisa0)"
                  d="M132.397 56.24c-.146-11.516 10.263-17.942 18.104-21.763c8.056-3.92 10.762-6.434 10.73-9.94c-.06-5.365-6.426-7.733-12.383-7.825c-10.393-.161-16.436 2.806-21.24 5.05l-3.744-17.519c4.82-2.221 13.745-4.158 23-4.243c21.725 0 35.938 10.724 36.015 27.351c.085 21.102-29.188 22.27-28.988 31.702c.069 2.86 2.798 5.912 8.778 6.688c2.96.392 11.131.692 20.395-3.574l3.636 16.95c-4.982 1.814-11.385 3.551-19.357 3.551c-20.448 0-34.83-10.87-34.946-26.428m89.241 24.968c-3.967 0-7.31-2.314-8.802-5.865L181.803 1.245h21.709l4.32 11.939h26.528l2.506-11.939H256l-16.697 79.963h-17.665m3.037-21.601l6.265-30.027h-17.158l10.893 30.027m-118.599 21.6L88.964 1.246h20.687l17.104 79.963h-20.679m-30.603 0L53.941 26.782l-8.71 46.277c-1.022 5.166-5.058 8.149-9.54 8.149H.493L0 78.886c7.226-1.568 15.436-4.097 20.41-6.803c3.044-1.653 3.912-3.098 4.912-7.026L41.819 1.245H63.68l33.516 79.963H75.473"
                  transform="matrix(1 0 0 -1 0 82.668)"
                />
              </svg>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="text-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={90}
                height={32}
                viewBox="0 0 512 94"
              >
                <path
                  fill="#DA1A32"
                  d="M21.63 63.868v3.425a4.81 4.81 0 0 0 4.812 4.811h42.89a4.81 4.81 0 0 0 4.812-4.81v-3.426H95.77v20.969c0 4.894-4.004 8.898-8.898 8.898H8.898C4.004 93.735 0 89.73 0 84.837v-20.97h21.63Zm-.003-27.816V57.68H0V36.052h21.627Zm74.143 0V57.68H74.144V36.052H95.77ZM86.872 0c4.894 0 8.898 4.004 8.898 8.902v20.965H74.144v-3.425a4.81 4.81 0 0 0-4.811-4.811H26.438a4.81 4.81 0 0 0-4.811 4.81v3.426H0V8.897C0 4.005 4.004 0 8.898 0Z"
                />
                <path
                  fill="#4E4540"
                  d="M192.572 21.61c9.717 0 18.887 8.159 18.887 24.572v1.284c0 16.32-9.076 24.567-18.887 24.567c-7.06 0-11.276-3.945-14.209-8.252V84.96h-10.358V22.524h10.358v7.796c3.024-4.674 7.24-8.71 14.21-8.71Zm257.46 0c6.969 0 11.551 2.568 15.587 6.603l-5.776 7.61c-2.567-2.657-5.41-4.858-9.811-4.858c-6.788 0-11.737 6.508-11.737 15.678v.457c0 9.44 4.95 15.768 12.009 15.768c4.216 0 7.059-2.107 9.901-4.95l5.591 6.875c-3.85 4.307-8.709 7.331-16.13 7.335c-12.65 0-21.82-10.177-21.82-24.662v-.917c0-14.485 9.441-24.938 22.186-24.938Zm-212.203 0c13.201 0 20.17 11.005 20.17 25.58v.3a56.602 56.602 0 0 1-.09 3.275H227.47c.913 8.158 5.957 12.56 12.284 12.56c4.582 0 7.976-2.016 11.185-5.134l5.41 6.417c-4.402 4.677-9.812 7.516-17.056 7.516c-12.469 0-22.186-9.532-22.186-24.753v-.732c0-14.575 8.804-25.028 20.721-25.028Zm-97.963-.003c12.835 0 22.276 10.453 22.276 24.847v.827c0 14.303-9.535 24.843-22.457 24.84c-12.835 0-22.28-10.36-22.28-24.754v-.822c0-14.304 9.532-24.938 22.461-24.938Zm188.848.185c5.41 0 11.185 1.925 15.768 5.224l-4.402 7.61c-3.665-2.472-7.7-4.306-11.551-4.306c-3.85 0-6.142 2.11-6.142 4.768v.185c0 3.208 3.85 4.858 9.535 7.425c7.516 3.394 13.202 6.874 13.202 14.485v.09c0 9.536-7.24 14.76-16.591 14.764c-5.776 0-12.465-2.11-18.06-6.783l4.858-7.426c4.402 3.571 9.08 5.682 13.387 5.682s6.783-2.292 6.783-5.32v-.09c0-3.484-3.76-5.043-9.535-7.52c-7.245-3.118-13.296-6.417-13.296-14.394v-.185c0-8.709 6.969-14.21 16.044-14.21Zm73.884.185c6.326 0 11.185 1.74 14.303 4.949c3.209 3.209 4.858 7.977 4.858 14.032V71.12h-10.177v-5.96c-2.843 4.121-7.15 6.873-13.477 6.873c-8.067 0-14.85-5.405-14.85-14.85v-.457c0-10.45 6.968-15.583 17.236-15.583c4.583 0 7.886.823 11.186 1.925v-2.02c0-6.508-3.851-9.901-10.454-9.901c-4.677 0-8.527 1.468-11.736 2.933l-2.933-8.253c4.673-2.29 9.536-3.85 16.044-3.85ZM366.384 9.41v13.11h10.91v8.894h-10.91V57.27c0 3.76 1.925 5.32 5.225 5.32c2.02 0 3.854-.457 5.594-1.375v8.528c-2.382 1.284-5.134 2.11-8.622 2.103c-7.15 0-12.56-3.024-12.56-12.47v-27.96h-3.614l-1.7-8.895h5.318V9.41h10.359Zm-77.963 12.2c9.35 0 14.942 6.6 14.942 16.962V71.12h-10.359V41.505c0-6.784-3.209-10.544-8.709-10.544c-5.41 0-9.17 4.036-9.17 10.73V71.12h-10.358V22.528h10.359v7.15c2.752-4.307 6.693-8.067 13.295-8.067ZM497.506 45.9l14.492 25.217h-12.012l-9.752-17.402l7.272-7.815ZM482.659 4.925v38.962l16.595-21.363h12.287L482.66 57.092v14.024H472.3V4.926h10.359Zm-79.876 43.273c-5.957 0-9.442 3.024-9.442 8.158v.185c0 4.858 3.39 7.61 7.882 7.7c5.961.091 10.544-3.944 10.544-9.444v-4.859c-2.382-1.008-5.5-1.74-8.984-1.74ZM139.677 30.776c-7.24 0-11.918 6.69-11.918 15.769v.55c0 9.08 5.044 15.954 12.103 15.95c7.24 0 11.918-6.784 11.918-15.859v-.55c0-9.076-5.044-15.86-12.103-15.86Zm50.053.004c-6.233 0-11.552 6.048-11.552 15.583v.918c0 9.536 5.32 15.587 11.552 15.59c6.327 0 11.275-5.866 11.275-15.586v-.827c0-9.717-5.039-15.678-11.275-15.678Zm48.1-.46c-5.686 0-9.718 5.043-10.45 13.291h20.536c-.551-7.7-4.035-13.291-10.087-13.291Z"
                />
              </svg>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="text-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={90}
                height={32}
                viewBox="0 0 512 98"
              >
                <path d="M312.805 18.394v63.838h18.015V18.394h-18.015Zm-141.742-.108v63.892h18.178v-49.61l14.174.054c4.653 0 7.899 1.136 10.117 3.517c2.867 3.03 4.003 7.952 4.003 16.879v29.16h17.637V46.904c0-25.21-16.068-28.618-31.757-28.618h-32.352Zm170.793.108v63.838h29.214c15.58 0 20.666-2.597 26.13-8.386c3.896-4.057 6.384-13.038 6.384-22.83c0-8.98-2.11-16.987-5.843-21.964c-6.6-8.927-16.23-10.658-30.62-10.658h-25.265Zm17.853 13.85h7.736c11.253 0 18.503 5.03 18.503 18.123c0 13.092-7.25 18.177-18.503 18.177h-7.736v-36.3Zm-72.872-13.85l-15.04 50.583l-14.39-50.583H237.93l20.558 63.838h25.967l20.775-63.838h-18.394Zm125.187 63.838h18.015V18.394h-18.015v63.838Zm50.529-63.838l-25.157 63.784h17.745l4.004-11.307h29.754l3.787 11.252H512l-25.373-63.73h-24.074Zm11.685 11.631l10.929 29.863h-22.181l11.252-29.863Z" />
                <path
                  fill="#76B900"
                  d="M54.803 28.997v-8.764c.866-.054 1.731-.108 2.597-.108c24.02-.757 39.763 20.666 39.763 20.666S80.176 64.38 61.944 64.38c-2.434 0-4.815-.379-7.087-1.136V36.626c9.36 1.136 11.253 5.247 16.825 14.606L84.18 40.737s-9.143-11.956-24.507-11.956c-1.623-.054-3.246.054-4.869.216m0-28.997v13.092l2.597-.162c33.38-1.136 55.182 27.374 55.182 27.374S87.587 70.708 61.566 70.708c-2.273 0-4.49-.216-6.709-.595v8.115c1.84.217 3.733.379 5.572.379c24.237 0 41.765-12.389 58.753-26.996c2.813 2.272 14.336 7.736 16.717 10.117c-16.122 13.525-53.721 24.399-75.037 24.399a53.2 53.2 0 0 1-5.95-.325v11.415h92.077V0H54.803Zm0 63.243v6.924c-22.397-4.003-28.619-27.32-28.619-27.32s10.766-11.902 28.619-13.85v7.574h-.054c-9.36-1.136-16.717 7.628-16.717 7.628s4.166 14.77 16.771 19.044M15.04 41.873s13.254-19.584 39.817-21.64v-7.14C25.427 15.472 0 40.357 0 40.357s14.39 41.657 54.803 45.444v-7.574C25.156 74.55 15.04 41.873 15.04 41.873Z"
                />
              </svg>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="text-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={90}
                height={32}
                viewBox="0 0 512 146"
              >
                <g fill="#1AB7EB">
                  <path d="M114.457 68.48c-.51 11.15-8.295 26.419-23.354 45.798c-15.57 20.243-28.742 30.366-39.518 30.366c-6.672 0-12.324-6.163-16.936-18.493l-9.243-33.904c-3.427-12.324-7.1-18.493-11.032-18.493c-.855 0-3.854 1.804-8.986 5.396L0 72.206c5.65-4.967 11.226-9.935 16.713-14.908c7.536-6.516 13.194-9.942 16.966-10.288c8.912-.856 14.398 5.238 16.456 18.282c2.225 14.075 3.764 22.829 4.63 26.255c2.569 11.677 5.394 17.509 8.483 17.509c2.397 0 5.996-3.787 10.798-11.362c4.794-7.574 7.364-13.337 7.71-17.297c.683-6.538-1.886-9.814-7.71-9.814c-2.743 0-5.57.631-8.476 1.878c5.628-18.44 16.38-27.397 32.251-26.886c11.767.346 17.313 7.98 16.636 22.904" />
                  <path d="M162.766 13.159c-.172 4.268-2.314 8.362-6.432 12.285c-4.629 4.433-10.114 6.65-16.456 6.65c-9.768 0-14.488-4.26-14.142-12.789c.165-4.433 2.78-8.702 7.838-12.796c5.057-4.088 10.67-6.14 16.847-6.14c3.6 0 6.597 1.413 9.001 4.224c2.398 2.816 3.51 5.673 3.344 8.566Zm22.37 91.44c-4.8 9.078-11.398 17.299-19.8 24.663c-11.489 9.934-22.97 14.901-34.452 14.901c-5.32 0-9.393-1.713-12.218-5.14c-2.826-3.427-4.156-7.874-3.983-13.361c.165-5.65 1.924-14.39 5.267-26.21c3.344-11.82 5.02-18.161 5.02-19.018c0-4.449-1.548-6.68-4.63-6.68c-1.028 0-3.944 1.804-8.745 5.396l-5.914-6.944c5.486-4.967 10.97-9.935 16.456-14.908c7.371-6.516 12.857-9.942 16.464-10.288c5.65-.51 9.806 1.15 12.466 4.998c2.653 3.846 3.637 8.836 2.96 14.983c-2.231 10.422-4.636 23.655-7.206 39.705c-.172 7.349 2.488 11.015 7.974 11.015c2.396 0 6.679-2.53 12.855-7.61c5.141-4.224 9.34-8.2 12.602-11.926l4.884 6.424Z" />
                  <path d="M345.713 104.599c-4.801 9.078-11.4 17.299-19.8 24.663c-11.49 9.934-22.972 14.901-34.453 14.901c-11.151 0-16.546-6.162-16.201-18.501c.164-5.486 1.24-12.075 3.209-19.785c1.969-7.71 3.044-13.707 3.216-17.988c.173-6.509-1.805-9.769-5.937-9.769c-4.47 0-9.798 5.32-15.99 15.944c-6.538 11.144-10.07 21.943-10.58 32.394c-.345 7.38.376 13.038 2.164 16.976c-11.962.345-20.342-1.63-25.12-5.914c-4.284-3.772-6.246-10.024-5.9-18.77c.165-5.487 1.007-10.971 2.524-16.457c1.512-5.486 2.353-10.37 2.526-14.66c.346-6.342-1.976-9.513-6.951-9.513c-4.298 0-8.934 4.891-13.91 14.66c-4.973 9.769-7.723 19.973-8.234 30.598c-.346 9.604.27 16.284 1.841 20.056c-11.768.345-20.123-2.135-25.068-7.44c-4.103-4.44-5.973-11.188-5.628-20.25c.166-4.441.947-10.641 2.359-18.592c1.413-7.95 2.202-14.14 2.367-18.588c.338-3.075-.435-4.615-2.314-4.615c-1.03 0-3.945 1.735-8.747 5.2l-6.168-6.943c.855-.676 6.25-5.65 16.2-14.908c7.198-6.68 12.083-10.107 14.652-10.28c4.457-.346 8.056 1.495 10.799 5.523c2.742 4.027 4.118 8.702 4.118 14.014c0 1.713-.173 3.344-.511 4.885c2.569-3.938 5.568-7.373 9.001-10.288c7.883-6.852 16.713-10.715 26.481-11.572c8.401-.683 14.398 1.286 18.005 5.915c2.908 3.772 4.276 9.174 4.11 16.2a368.178 368.178 0 0 0 3.862-3.344c3.939-4.628 7.793-8.31 11.565-11.053c6.342-4.63 12.948-7.199 19.8-7.718c8.228-.683 14.142 1.278 17.741 5.891c3.081 3.757 4.456 9.139 4.118 16.134c-.173 4.786-1.33 11.745-3.471 20.882c-2.15 9.137-3.216 14.382-3.216 15.75c-.173 3.591.173 6.064 1.028 7.432c.858 1.367 2.909 2.042 6.171 2.042c2.396 0 6.68-2.53 12.856-7.61c5.14-4.224 9.34-8.2 12.601-11.926l4.885 6.424" />
                  <path d="M383.765 77.488c.165-4.598-1.713-6.905-5.65-6.905c-5.14 0-10.355 3.539-15.66 10.617c-5.305 7.079-8.048 13.857-8.214 20.334c-.097 0-.097 1.112 0 3.328c8.386-3.066 15.66-7.754 21.822-14.066c4.96-5.455 7.528-9.897 7.702-13.308Zm58.37 26.849c-4.974 8.22-14.742 16.433-29.312 24.646c-18.17 10.445-36.602 15.661-55.282 15.661c-13.887 0-23.835-4.63-29.832-13.88c-4.284-6.341-6.343-13.88-6.17-22.625c.167-13.879 6.343-27.073 18.515-39.593c13.369-13.705 29.141-20.567 47.31-20.567c16.803 0 25.714 6.846 26.744 20.522c.683 8.716-4.118 17.696-14.397 26.932c-10.979 10.091-24.782 16.501-41.404 19.235c3.08 4.276 7.71 6.411 13.886 6.411c12.339 0 25.797-3.134 40.373-9.417c10.453-4.409 18.682-8.994 24.685-13.743l4.885 6.418Z" />
                  <path d="M482.88 86.13c.173-4.636-.473-8.89-1.93-12.753c-1.46-3.861-3.562-5.8-6.298-5.8c-8.746 0-15.945 4.726-21.596 14.172c-4.809 7.733-7.38 15.976-7.717 24.73c-.172 4.298.601 8.078 2.314 11.338c1.878 3.78 4.538 5.666 7.972 5.666c7.71 0 14.316-4.546 19.801-13.654c4.628-7.558 7.109-15.456 7.454-23.7Zm29.057.97c-.69 15.75-6.514 29.357-17.484 40.823c-10.97 11.468-24.603 17.202-40.886 17.202c-13.54 0-23.828-4.367-30.854-13.099c-5.14-6.499-7.972-14.63-8.483-24.383c-.864-14.72 4.448-28.247 15.944-40.57c12.34-13.69 27.849-20.536 46.536-20.536c11.995 0 21.08 4.028 27.255 12.068c5.831 7.364 8.484 16.862 7.972 28.494Z" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
