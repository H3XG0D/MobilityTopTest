import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

const LogoSVG = () => {
  return (
    <Svg width={60} height={36} viewBox="0 0 60 36" fill="none">
      <G clipPath="url(#clip0_4003_572)">
        <Path
          d="M48.627 0h-37.27C5.085 0 0 5.71 0 11.912V23.96c0 6.203 5.085 11.912 11.357 11.912h37.27c6.272 0 11.357-5.71 11.357-11.912V11.912C59.984 5.71 54.9 0 48.627 0zm8.1 24.039c0 5.128-3.7 10.134-8.902 10.134H12.16c-5.202 0-8.902-5.008-8.902-10.134V11.832c0-5.128 3.7-10.133 8.902-10.133h35.665c5.202 0 8.902 5.007 8.902 10.133V24.04z"
          fill="#DAD9D9"
        />
        <Path
          d="M22.782 21.524h-7.91a.938.938 0 00-.944.933c0 .515.422.932.944.932h7.91a.938.938 0 00.943-.932.938.938 0 00-.943-.933z"
          fill="#DF0614"
        />
        <Path
          d="M11.868 22.247c.058-1.233 1.133-2.182 2.381-2.182h10.853v-1.943H11.34c-2.365 0-4.282 1.896-4.282 4.235 0 2.34 1.917 4.236 4.282 4.236H24.12a.978.978 0 00.983-.973.978.978 0 00-.983-.972h-9.937c-1.317 0-2.378-1.087-2.316-2.403l.002.002zM38.51 20.504H28.223c-1.434 0-2.607 1.16-2.607 2.578v3.512h8.062a.363.363 0 00.364-.36v-.614a.363.363 0 00-.364-.36h-4.27v-2.75a.65.65 0 01.654-.646H34.9v4.73h3.61v-6.09zM52.28 20.504h-3.611v6.09h3.61v-6.09zM44.165 23.05a.598.598 0 00-.602.627c.018.323.31.564.637.564h.32c.278 0 .529.208.544.483a.513.513 0 01-.515.537h-1.577v-4.759h-3.765v6.09h7.308c.99 0 1.792-.793 1.792-1.771 0-.98-.803-1.772-1.792-1.772H44.165z"
          fill="#DF0614"
        />
        <Path
          d="M25.102 9.279H10.235c-1.656 0-3.012 1.34-3.012 2.979v4.674h10.746a.932.932 0 00.937-.927.932.932 0 00-.937-.927H12.48V12.4c0-.683.56-1.238 1.252-1.238h6.362v6.96h5.007V9.279h.001zM35.615 9.279h-6.889c-1.714 0-3.105 1.37-3.105 3.06s1.39 3.06 3.105 3.06h6.889c1.714 0 3.105-1.37 3.105-3.06s-1.391-3.06-3.105-3.06zm-2.326 4.76H31.05a1.713 1.713 0 01-1.724-1.7c0-.939.772-1.7 1.724-1.7h2.239c.952 0 1.724.761 1.724 1.7s-.772 1.7-1.724 1.7zM48.042 9.867l-2.228 2.132-2.228-2.132a2.125 2.125 0 00-1.47-.588h-2.91v6.12h3.764v-3.706l2.842 2.55 2.842-2.55V15.4h3.765V9.279h-2.91c-.55 0-1.075.21-1.47.588h.003z"
          fill="#68B301"
        />
        <Path
          d="M27.12 17.763v-1.486h-.462v1.314a.653.653 0 00.664.655h.198v.896c0 .128-.07.196-.198.196-.095 0-.208-.053-.208-.308 0-.027 0-.066.003-.117.002-.036.004-.063.004-.085h-.463v.144c0 .182.066.338.193.464s.285.19.47.19c.183 0 .34-.064.468-.19a.632.632 0 00.193-.464v-2.695h-.462v1.682h-.198c-.13 0-.201-.068-.201-.196zM30.083 16.277h-.463v3.35h.463v-1.529h.398v1.529h.463v-3.35h-.463v1.532h-.398v-1.532zM33.045 17.807v-1.53h-.462v3.35h.462l.002-1.009.322-.865.075.002v1.872h.463v-3.35h-.463l-.001.667-.322.863h-.076zM36.209 16.277h-.662v3.35h.662a.643.643 0 00.467-.192.629.629 0 00.195-.463v-.51a.638.638 0 00-.224-.491l-.02-.02.02-.018a.637.637 0 00.224-.49v-.51a.628.628 0 00-.196-.46.642.642 0 00-.466-.194v-.002zm.2 2.865c0 .055-.021.1-.061.138a.202.202 0 01-.141.058h-.198v-1.245h.198a.2.2 0 01.14.058c.04.039.061.085.061.138v.853zm0-1.532c0 .051-.021.097-.063.136a.197.197 0 01-.139.058h-.198v-1.241h.198a.2.2 0 01.14.058c.04.039.061.085.061.136v.853zM39.66 19.34h-.689v-1.242h.69v-.289h-.69v-1.243h.69v-.289h-1.152v3.35h1.152v-.288zM41.959 16.277h-.662v3.35h.462v-1.19h.198c.182 0 .34-.065.47-.193a.629.629 0 00.194-.462v-.85a.628.628 0 00-.196-.461.642.642 0 00-.466-.194zm.2 1.673c0 .053-.021.1-.061.14a.192.192 0 01-.141.057h-.198v-1.582h.198a.2.2 0 01.14.057c.04.04.061.085.061.136v1.192zM44.923 16.277a.649.649 0 00-.47.19.632.632 0 00-.192.465v2.04c0 .182.065.337.192.464.127.126.286.19.47.19a.64.64 0 00.467-.191.629.629 0 00.194-.463v-.145h-.46l.003.072c.004.051.005.093.005.126 0 .207-.07.313-.211.313-.129 0-.198-.068-.198-.196v-2.384c0-.052.02-.1.059-.137a.194.194 0 01.139-.058c.14 0 .211.105.211.314 0 .027 0 .065-.005.116l-.005.082h.46v-.145a.628.628 0 00-.195-.46.642.642 0 00-.466-.195l.002.002zM47.886 16.277a.649.649 0 00-.47.19.632.632 0 00-.192.465v2.695h.462v-1.19h.399v1.19h.462v-2.695a.628.628 0 00-.196-.461.642.642 0 00-.465-.194zm.199 1.87h-.399V16.76c0-.053.019-.1.059-.138a.198.198 0 01.278 0c.041.04.062.085.062.136V18.147zM51.743 16.277a.616.616 0 00-.445.175l-.019.017-.019-.017a.616.616 0 00-.445-.175.597.597 0 00-.449.19.66.66 0 00-.178.465v2.695h.462V16.76c0-.053.019-.1.058-.138a.198.198 0 01.279 0c.041.04.062.085.062.136v2.369h.462v-2.369c0-.052.02-.1.06-.137a.197.197 0 01.141-.057c.055 0 .1.02.14.058.04.04.06.085.06.136v2.867h.462V16.93a.656.656 0 00-.18-.462.59.59 0 00-.449-.193l-.002.002z"
          fill="#040301"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_4003_572">
          <Path fill="#fff" d="M0 0H60V36H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default LogoSVG;