Welcome to my portfolio.

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

---

## Boilerplate Create React App Readme:

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### Available Scripts

In the project directory, you can run:

###### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

###### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

###### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

###### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

--- 

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
