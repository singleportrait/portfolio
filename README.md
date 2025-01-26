Welcome to my portfolio.

## Starting the app

You can install everything with:

```
yarn install
```

If you run into errors with `fsevents` (I ran into this issue when trying to install on a new M1 laptop), it may have to do with your current Node version. A quick fix is to go back to an earlier Node that we know it works with (using `nvm` Node version manager):

```
nvm install 16.17.0
npm install -g yarn
nvm use 16.17.0
yarn install
```

After this, it worked.

## Compressing Images & Videos

Use [PNG Quant](https://pngquant.org/) ([installation instructions here](https://pngquant.org/install.html)) to compress the slideshow images. This should be done for all images to keep load times down.

```sh
pngquant <oldfile.png>

# If you have a bunch of files that start with the same prefix, you can use, for instance:
pngquant locally-grown-*

# If you want to overwrite the original file with the new one, you can do:
pngquant -f --ext .png locally-grown-*
```

Use Edwin's FFMpeg compression script for the videos, but add `faststart` for mobile loading (help thread [here](https://stackoverflow.com/questions/10328401/html5-how-to-stream-large-mp4-files):

Videos should be a ratio of 2556x1608 (1:1.59) to fit inside the browser frame.

There is a shell script in this directory that you can run from the same folder the videos are in, to keep you from having to type the full ffmpeg options every time.

```sh
./ffmpeg-video-compression.sh noname-book-club.mp4

# Full script, for reference:
ffmpeg -i <input-filename.mp4> -vcodec h264 -strict -2 -an -movflags faststart <output-filename.mp4>
```

## Hosting Videos

Currently hosting videos on my AWS S3 bucket for fastest loading. Could ideally set these as variable constants that I can then pull from within the templates. Or, as values in the slides data object.

## Deploying

This project is currently deployed on Firebase.

Deploying new versions of the site is done by running:

```
yarn build
```

And then:

```
firebase deploy
```

---

## Boilerplate Create React App Readme:

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

###### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

###### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

###### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

###### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

###### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

###### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
