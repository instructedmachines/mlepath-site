Drop the licensed Avenir Next TTFs here (they ship with the MLE Path design
system, license required):

  AvenirNext-Regular.ttf
  AvenirNext-Italic.ttf
  AvenirNext-Medium.ttf
  AvenirNext-DemiBold.ttf

Until they are present, the site falls back to Nunito Sans (loaded from
Google Fonts in app/layout.tsx). The @font-face declarations live in
app/globals.css and already point at /fonts/.
