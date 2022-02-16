import { useHistory } from "react-router-dom";
import "./Home.css";

export function Home() {
  const history = useHistory();
  return (
    <section className="H_MainCntr">
      <article className="H_HeaderCntr">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="140"
          height="48"
          viewBox="0 0 140 48"
        >
          <path
            fill="#1CC29F"
            d="M16.543 28.966l5.232-3.073L0 13.103v12.631c1.632-.895 3.688-1.36 6.042-1.36 5.125 0 8.37 2.214 10.5 4.592M6.935 46.595c2.181 0 3.826-.654 3.826-2.327 0-1.71-2.11-2.364-4.72-3.02-1.942-.505-4.172-1.013-6.04-1.971v3.245c1.572 2.582 4.182 4.073 6.934 4.073"
          ></path>
          <path fill="#52595F" d="M43.55 38.683v-25.58l-21.775 12.79z"></path>
          <path
            fill="#ACE4D6"
            d="M43.55 13.104L21.775.314 0 13.104l21.775 12.79z"
          ></path>
          <path
            fill="#373B3F"
            d="M21.775 25.893l-5.233 3.073-5.608 3.295c-1.433-1.16-3.256-1.996-4.928-1.996-2.038 0-3.075.69-3.075 1.964 0 1.473 1.419 2.175 3.384 2.745.412.119.847.233 1.3.347 4.326 1.054 10.117 2.4 10.117 8.437 0 1.268-.262 2.53-.836 3.683H43.55v-8.759l-21.775-12.79z"
          ></path>
          <path
            fill="#FFF"
            d="M7.615 35.32a37.409 37.409 0 0 1-1.3-.346c-1.965-.57-3.384-1.272-3.384-2.745 0-1.273 1.037-1.964 3.075-1.964 1.672 0 3.495.837 4.928 1.996l5.608-3.295c-2.131-2.378-5.375-4.593-10.5-4.593-2.355 0-4.41.466-6.042 1.36V39.278c1.869.958 4.099 1.465 6.042 1.972 2.61.655 4.719 1.309 4.719 3.019 0 1.673-1.645 2.327-3.826 2.327-2.752 0-5.362-1.49-6.935-4.073v4.92h16.896c.574-1.153.836-2.416.836-3.684 0-6.037-5.791-7.383-10.117-8.437"
          ></path>
          <path
            fill="#373B3F"
            d="M54.012 35.168c-.968-.285-1.747-.656-2.334-1.112l1.032-2.318c.562.418 1.23.754 2.005 1.007a7.43 7.43 0 0 0 2.324.38c.863 0 1.5-.13 1.912-.39.413-.259.619-.604.619-1.035a.994.994 0 0 0-.365-.788 2.768 2.768 0 0 0-.938-.504 18.837 18.837 0 0 0-1.547-.418c-1-.24-1.818-.48-2.455-.722a4 4 0 0 1-1.64-1.159c-.457-.532-.684-1.241-.684-2.128 0-.773.206-1.472.618-2.1.412-.626 1.034-1.123 1.866-1.49.83-.368 1.846-.552 3.046-.552a9.95 9.95 0 0 1 2.455.304c.8.203 1.5.494 2.1.874l-.938 2.337c-1.211-.696-2.424-1.045-3.636-1.045-.85 0-1.478.14-1.884.418-.406.279-.61.646-.61 1.102 0 .456.235.795.704 1.016.468.223 1.184.441 2.146.656 1 .241 1.818.482 2.456.722.637.241 1.183.621 1.64 1.14.455.52.685 1.223.685 2.11 0 .76-.21 1.453-.63 2.08-.418.627-1.045 1.124-1.883 1.491-.838.367-1.856.551-3.055.551-1.037 0-2.04-.142-3.009-.427zm17.49-2.85c.481-.513.722-1.2.722-2.062 0-.86-.241-1.548-.722-2.061-.48-.513-1.097-.77-1.846-.77-.75 0-1.366.257-1.847.77-.48.513-.722 1.2-.722 2.061 0 .862.241 1.549.722 2.062.48.513 1.097.77 1.847.77s1.365-.257 1.846-.77zm1.218-6.67a4.681 4.681 0 0 1 1.81 1.844c.437.792.656 1.713.656 2.764 0 1.052-.219 1.973-.656 2.764a4.683 4.683 0 0 1-1.81 1.844c-.768.437-1.62.655-2.558.655-1.287 0-2.3-.411-3.037-1.235v4.77H64.2V25.144h2.794v1.178c.725-.886 1.78-1.33 3.168-1.33.937 0 1.79.219 2.558.656zm4.414 9.72V21.268h2.925v14.098h-2.925zm5.643 0V25.144H85.7v10.222h-2.924zm.15-12.123a1.552 1.552 0 0 1-.506-1.178c0-.468.169-.861.506-1.178.338-.316.775-.475 1.312-.475s.975.152 1.312.456c.338.304.506.684.506 1.14 0 .494-.168.903-.506 1.225-.337.323-.775.485-1.312.485s-.974-.158-1.312-.475zm11.997 11.628c-.288.216-.64.377-1.06.485-.418.107-.859.161-1.321.161-1.2 0-2.127-.31-2.784-.93-.656-.621-.983-1.533-.983-2.737v-4.427H87.22v-2.28h1.556v-2.26H91.7v2.26h2.511v2.28H91.7v4.39c0 .43.11.762.327.997.22.234.529.351.929.351.462 0 .856-.126 1.18-.38l.788 2.09zm17.957-9.728l-3.656 10.222h-2.812l-2.268-6.346-2.343 6.346H98.99l-3.636-10.222h2.756l2.38 6.916 2.475-6.916h2.474l2.4 6.916 2.455-6.916h2.587zm1.369 10.222V25.145h2.924v10.222h-2.924zm.15-12.122a1.552 1.552 0 0 1-.507-1.178c0-.468.17-.861.507-1.178.337-.316.775-.475 1.312-.475s.975.152 1.312.456c.337.304.506.684.506 1.14 0 .494-.169.903-.506 1.225-.337.323-.775.485-1.312.485s-.975-.158-1.312-.475zm6.429 11.96c-.8-.208-1.437-.47-1.912-.788l.974-2.128c.45.292.994.53 1.631.712a6.728 6.728 0 0 0 1.875.276c1.238 0 1.856-.31 1.856-.931 0-.29-.169-.5-.506-.627-.337-.126-.857-.234-1.556-.323-.825-.126-1.507-.272-2.044-.437a3.158 3.158 0 0 1-1.396-.874c-.393-.418-.59-1.013-.59-1.786 0-.646.184-1.219.553-1.72.368-.5.906-.889 1.612-1.168.705-.278 1.54-.418 2.502-.418.712 0 1.422.08 2.128.238.706.158 1.29.377 1.752.655l-.973 2.11a5.766 5.766 0 0 0-2.907-.76c-.625 0-1.094.088-1.406.265-.312.177-.469.406-.469.684 0 .317.17.539.507.665.337.127.875.247 1.612.361.825.14 1.5.288 2.024.447a3.03 3.03 0 0 1 1.369.864c.387.418.58 1.001.58 1.748 0 .633-.187 1.197-.561 1.691-.376.494-.922.878-1.64 1.15-.72.272-1.572.408-2.56.408a9.694 9.694 0 0 1-2.455-.313zm11.998-7.4c-.45.38-.725.9-.825 1.558h4.967c-.1-.646-.375-1.162-.824-1.548-.45-.386-1-.58-1.65-.58-.663 0-1.219.19-1.668.57zm6.842 3.287h-7.63c.138.634.462 1.134.974 1.501.513.368 1.15.551 1.913.551.525 0 .99-.08 1.396-.237a3.371 3.371 0 0 0 1.134-.75l1.556 1.71c-.95 1.101-2.336 1.652-4.162 1.652-1.136 0-2.142-.224-3.017-.674-.875-.45-1.55-1.074-2.025-1.872-.475-.798-.712-1.703-.712-2.717 0-1 .234-1.903.703-2.707a4.954 4.954 0 0 1 1.931-1.881c.818-.45 1.734-.675 2.746-.675.987 0 1.88.215 2.68.646a4.694 4.694 0 0 1 1.885 1.853c.455.804.684 1.738.684 2.802 0 .038-.019.304-.056.798z"
          ></path>
        </svg>

        <div>
          <button onClick={() => history.push("/login")}>Log in</button>
          <button onClick={() => history.push("/sign-up")}>Sign up</button>
        </div>
      </article>

      <article className="H_BgCntr"></article>

      <article className="H_DetailsCntr">
        <div>
          <h1>
            Less stress when sharing expenses <span>with anyone</span>
          </h1>
          <div>
            <svg
              className="fill-current w-9 lg:w-12"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 36 35"
            >
              <path d="M7.844 0L1.961 3.5l11.766 7 3.922 2.333L9.805 17.5 3.922 14 0 16.333l3.922 2.334 1.961 1.166L3.922 21l1.961 1.167V24.5l1.961-1.167v7L11.766 28v-7l7.844-4.667V35l3.922-2.333 1.96-1.167v-7l1.962-1.167V21l-1.961 1.167v-2.334l1.96-1.166v-2.334l-1.96 1.167v-4.667l5.883-3.5L35.298 7V4.667L33.337 3.5l-9.805 5.833L19.61 7l1.961-1.167-1.961-1.166-1.961 1.166-1.961-1.166 1.96-1.167-1.96-1.167L13.727 3.5z"></path>
            </svg>

            <svg
              className="fill-current w-9 lg:w-12"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 34 32"
            >
              <path d="M27.736 15.229V31.02H20.56V22.6h-7.177v8.423H6.207V15.228l7.176-4.211 3.588-2.106 10.765 6.317zm-.03-6.335l5.412 3.176v2.106H29.53l-12.559-7.37-12.558 7.37H.824V12.07l16.147-9.475 7.177 4.211V.49h3.557v8.405z"></path>
            </svg>

            <svg
              className="fill-current w-9 lg:w-12"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 31 29"
            >
              <path d="M15.163 4.311L7.653-.043.143 4.311v15.237l15.02 8.707 15.02-8.707V4.311l-7.51-4.354z"></path>
            </svg>

            <svg
              className="fill-current w-9 lg:w-12"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 29 30"
            >
              <path d="M11.673.979v9.055L3.519 5.506.461 10.6l8.154 4.528-8.154 4.527L3.52 24.75l8.154-4.528v9.056h6.115V20.22l8.154 4.528L29 19.655l-8.154-4.527L29 10.6l-3.058-5.094-8.154 4.528V.979z"></path>
            </svg>
          </div>
          <h3>
            Keep track of your shared expenses and balances with housemates,
            trips, groups, friends, and family
          </h3>

          <button onClick={() => history.push("/sign-up")}>Sign up</button>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 600 600"
          className="lg-icon"
        >
          <path
            className="s-p28 ad1 adu1"
            d="M116.761 355.13h30.54l-30.54-17.633v17.632zm-30.54-70.53v17.632h30.54L86.221 284.6zm0-193.954v17.632l30.54-17.632h-30.54zm30.54 17.632h30.54l-30.54-17.632v17.632zm61.08 17.633v17.632h30.54l-30.54-17.632zm30.54 35.264v17.632l30.54-17.632h-30.54zm61.08 35.264v-17.632l-30.54 17.632h30.54zm91.62 52.897h-30.54l30.54 17.632v-17.633zM147.3 390.394l15.27 8.815 15.27-26.448-30.54 17.633zm15.27 44.08l15.27 8.816v-35.264l-15.27 26.448zm183.24 70.529l15.27 8.816v-35.264l-15.27 26.448zm-15.27-79.345l30.54-17.632-15.27-8.816-15.27 26.448zm30.54-88.16v-35.266l-15.27 26.449 15.27 8.816z"
          ></path>
          <path
            className="s-p3 ad4 adu2"
            d="M513.78 143.542l-30.54-17.632v17.633h30.54l30.54-17.633-30.54-17.632v35.264zm30.54-35.264v17.633l30.54-17.633h-30.54zM452.7 214.071l-30.54-17.632v17.632h30.54zm-30.54-17.632l30.54-17.632-30.54-17.633v35.265zm30.54-17.632v17.632h30.54l-30.54-17.633v.001zm30.54 17.632l30.54-17.632-30.54-17.633v35.265zm-91.62 52.897l30.54-17.633-30.54-17.632v35.264zM86.222 266.967h30.54l-30.54-17.633v17.633zm30.54 0v35.264l30.54-17.631-30.54-17.633zm30.54 35.264h-30.54l30.54 17.633v-17.632zm61.08 17.632h-30.54v17.633l30.54-17.632zm-61.08 0h30.54v-17.632l-30.54 17.632zm91.62-229.218l-30.54-17.632v17.632h30.54zm-122.16 0l30.54-17.633-30.54-17.632v35.265zm30.54 0h30.54L147.3 73.014v17.632zm0-35.264v17.632l30.54-17.632H147.3zm0 52.896l30.54 17.633V108.278H147.3zm152.7 35.265h30.54L300 125.91v17.633zm-30.54-70.53v17.633H300l-30.54-17.632zm122.16 105.794l-30.54-17.632v35.264l30.54-17.632zm30.54 17.632l-30.54-17.632v17.632h30.54zM300 161.175v35.264l30.54-17.632L300 161.175zm0 35.264l30.54 17.633v-17.633H300zm61.08-35.264h-30.54v17.632l30.54-17.632zm-152.7-52.897V90.646h-30.54l30.54-17.632-30.54-17.632v35.264l30.54 17.632-30.54 17.632 30.54 17.633v-35.265l30.54 17.633V108.278h-30.54zm30.54-17.632v17.632h30.54l-30.54 17.632 30.54 17.632v-35.264l-30.54-17.632zm30.54 70.529v-17.633l-30.54 17.633h30.54zm91.62 88.16h30.54l-30.54-17.631v17.631zm-30.54-35.264l30.54 17.633V214.07h-30.54zm-152.7 264.484l30.54-17.633-15.27-8.816-15.27 26.449zm30.54-52.897v-35.264l-30.54 17.632 15.27-26.448-15.27-8.817v35.265l30.54 17.632zm213.78-17.632l-15.27 26.448 15.27 8.816v-35.264zm-30.54 88.161L361.08 513.82l30.54 17.633 30.54-17.633-15.27-8.816-15.27 26.448v-35.264zm-30.54-52.897v35.265l15.27-26.448-15.27-8.817zm45.81-114.61l15.27 8.817v-35.265l-15.27 26.449zm45.81 61.714v-35.265l-15.27 26.448 15.27 8.817zM391.62 284.6l30.54-17.632-30.54-17.632V284.6zm0 0l-30.54 17.633 30.54 17.632v-35.264zm-15.27 96.978l15.27-26.448-30.54 17.632 15.27 8.816zm15.27-26.449v70.529l-30.54-17.632v35.265l30.54-17.633v35.264l30.539 17.633-30.54 17.632 15.27 8.816 15.27-26.448V443.29l-30.54 17.632 15.27-26.448-15.27-8.816 15.27-26.448-15.269-8.816 30.54-17.632-30.54-17.633z"
          ></path>
          <path
            className="s-p0 ad3 adu2"
            d="M452.7 143.542v17.633h30.54l-30.539-17.632h30.54V125.91l-30.54 17.632zm30.54 17.633l30.54-17.633h-30.54v17.633zm61.08 0l30.54-17.633h-30.54v17.633zm0-52.897h-30.54l30.54 17.633v-17.633zm0-17.632v17.632h30.54l-30.54-17.632zM452.7 214.071l30.54-17.632H452.7v17.632zm61.08-52.896h30.54l-30.54-17.633v17.633zM86.22 319.865l30.541 17.632v-17.632h-30.54zm30.541-17.632v17.632h30.54l-30.54-17.632zm30.54 17.632l-30.54 17.632 30.54 17.632h-30.54v17.632l30.54-17.632v17.632h30.54L147.3 355.13v-35.264zm-91.62-17.633v-35.264L25.141 284.6l30.54 17.633h30.54V284.6l-30.54 17.632zm30.54 17.632l30.54-17.632h-30.54v17.632zm30.54 52.897l30.54 17.632v-17.632h-30.54zM86.22 73.014l-30.54 17.632h61.08L86.22 73.014zm30.54 35.264V90.646l-30.54 17.632h30.54zm61.08 52.897v-17.633H147.3l30.54 17.633zm-30.54-52.897v35.265l30.54-17.632 30.54-17.633h-30.54v17.632l-30.54-17.632 30.54-17.632H147.3v17.632h-30.54v17.632l30.54-17.632zm61.08 35.264l-30.54 17.633 30.54 17.632v-35.264zm30.54 17.633v35.264l30.54-17.632-30.54-17.632zm91.62-17.632v17.632h30.54l-30.54-17.632zm-61.08 123.425H300l-30.54-17.633v17.633zm61.08 0H300l30.54 17.632v-17.632zM300 196.439h-30.54v17.632H300V196.44zm0 35.264l-30.54 17.633H300v-17.633zm-61.08 35.265L208.38 284.6l30.54 17.632-30.54 17.633h30.54v-17.633h30.54V284.6l-30.54 17.632v-35.264zm-30.54 35.264h-30.54l30.54 17.633v35.264l30.54-17.632-30.54-17.632v-17.633zm122.16-52.897H300v17.633l30.54-17.632 30.54-17.632-30.54-17.633H300v17.632l30.54-17.632v35.264zm30.54 17.633l-30.54-17.632v17.632h30.54zM162.57 399.209l15.271 8.817V372.76l-15.27 26.448zm-15.27 26.45l15.27-26.45-15.269-8.815v35.264zm15.271 8.815l-15.27 26.448v35.265l30.54-17.632-30.54-17.632 30.54-17.633-15.27-8.816zm-15.27-8.816l15.27 8.816 15.27-26.448-30.54 17.632zm183.24 105.793v35.265l15.27-26.448-15.27-8.817 30.539-17.631-15.27 26.448 15.27 8.816v-35.265l-15.27-8.816-15.27 26.449zm0-35.264l15.27 8.816 15.27-26.448-30.54 17.632zm30.54-52.897l-30.54 17.633 30.54 17.632V443.29zm-30.54-17.632v35.265l15.27-26.449-15.27-8.816zm0-35.264v35.264l15.27-26.448-15.27-8.816 30.54-17.632-15.27 26.448 15.27 8.816v-35.264l-30.54-17.633v35.265zm30.54-52.897l-15.27-8.816-15.27 26.448 30.54-17.632zm-30.54-17.632l15.27 8.816 15.27-26.448-30.54 17.632zm15.27-26.449l15.27 8.816v-35.264l-15.27 26.448z"
          ></path>
          <path
            className="s-p2 ad4 adu3"
            d="M574.86 108.278l-30.54 17.633-30.54 17.631v-35.264l-30.54 17.632 30.54 17.633h30.54V125.91l30.54 17.632v-35.265zm-91.62 52.896l-30.54 17.632-30.54 17.633h30.54v-17.632l30.54 17.632v-35.264l30.54 17.631v-17.631h-30.54zm-61.08 0l30.54 17.632v-17.631h-30.54zM116.762 302.234v-35.265L86.221 284.6l30.54 17.633zm-30.54-35.265h-30.54l30.54 17.632v-17.632zm61.08 17.633v17.631h30.54l-30.54-17.631zm61.08 35.263l-30.54 17.632 30.54 17.633v-35.264l30.54 17.631v-17.632h-30.54zM147.3 355.13h30.54v-17.632L147.3 355.13zm30.54 17.632l30.54-17.632h-30.54v17.632zm0-52.897H147.3l30.54 17.633v-17.632zm0-211.586V90.646l-30.54 17.632h30.54zM147.3 55.382h-30.54l30.54 17.632V55.382zm0 17.632l30.54 17.632V55.381L147.3 37.75v17.633h30.54L147.3 73.014zm0 0l-30.54 17.632V55.382L86.22 73.014l30.54 17.632h30.54V73.014zm122.16 0l-30.54 17.632h30.54V73.014zM300 90.646h-30.54v17.632L300 90.646zm91.62 88.16l-30.54 17.633v-35.264l-30.54 17.632v-17.632H300l30.54-17.632V108.28L300 125.91l30.54 17.632H300v17.632l-30.54 17.632L300 196.44h30.54v-17.632L300 196.439v-35.264l30.54 17.633 30.54 17.632v17.632h30.54l-30.54 17.631 30.54 17.633 30.54 17.633-15.27 26.448 15.27 8.816v35.264l30.54-17.632-30.54-17.633V231.704l-30.54 17.632v-35.264l30.54-17.632v-35.265l-30.54 17.632zm0 17.633v17.632l-30.54-17.632h30.54v-17.632l30.539 17.632h-30.54zm30.54 17.632h-30.54l30.54 17.633V214.07zm-15.27 114.61l15.27-26.448-30.54 17.632 15.27 8.816zm0-35.265l-15.27-8.816v35.265l15.27-26.449zM300 143.543V125.91l-30.54 17.633v17.632H300l-30.54-17.632h30.54zm91.62 211.585v-35.263l-30.54-17.633 30.54-17.632-15.27-8.816-15.27 26.448v35.265l30.54-17.632-15.27 26.448 15.27 8.816 30.54-17.632-15.27-8.816-15.27 26.447zM269.46 178.807v-17.632h-30.54l30.54 17.632zm61.08 35.265l30.54-17.633h-30.54v17.633zm-91.62-105.794V90.646l-30.54 17.632v35.264l30.54-17.631-30.54-17.633h30.54zm0 17.633v17.632h30.54l-30.54-17.632zm-30.54 17.631l30.54 17.633v-17.633h-30.54zM300 302.232h-30.54v17.633L300 302.232v-35.264L269.46 284.6 300 302.232zm-30.54-35.264h-30.54l30.54 17.632v-17.632zm61.08 0V284.6l30.54-17.632h-30.54zM300 231.703v17.633h30.54L300 231.703zm-61.08 88.162h30.54l-30.54-17.633v17.632zm-30.54-17.633h30.54L208.38 284.6v17.632zm-30.54 176.323l15.27-26.449-15.269-8.816v35.265zm30.541-17.633v-35.264l-15.27 26.448 15.27 8.816zm-30.54-52.897v35.265l30.54-17.632-30.54-17.633zm30.54-17.631v-35.265l-15.27 26.449 15.27 8.816zM361.08 513.819v35.265l30.54-17.632-30.54-17.633 30.54-17.632-15.27-8.816-15.27 26.448zm91.62-158.69l-30.54 17.632 15.27 8.816 15.27-26.448zm-91.62 52.897l-15.27 26.448 15.27 8.816v-35.264l30.54 17.632-15.27 26.448 15.27 8.817-30.54 17.632 15.27 8.816 15.27-26.448v35.264l30.54-17.632-15.27 26.448 15.27 8.816v-35.264l-30.54-17.633 30.54-17.632-15.27-8.816-15.27 26.448V425.66l30.54-17.633-15.27-8.816-15.27 26.448v-35.264l15.27 8.816 15.27-26.448-30.54 17.632-30.54 17.632zm91.62-17.632l-15.27-8.817-15.27 26.449 30.54-17.632zm-91.62-52.897v35.264l15.27-26.448-15.27-8.816zm0-70.53l15.27 8.817 15.27-26.448-30.54 17.632zm0 105.795v35.264l15.27-26.448-15.27-8.816zm30.54 17.632v-35.265l-15.27 26.449 15.27 8.816zM330.541 284.6v35.265l15.27-26.449-15.27-8.816z"
          ></path>
          <path
            className="s-p1 adu1"
            d="M544.32 125.91v17.633h30.54l-30.54-17.632zm0-35.264l-30.54 17.632h30.54V90.646zM452.7 214.071V196.44h-30.54l30.54 17.632zm0-35.265l30.54-17.631H452.7v17.631zm0-35.264l-30.54 17.633h30.54v-17.633zm61.08 0l-30.54 17.632v-17.631H452.7l30.54 17.632h30.54v-17.632l30.54 17.632h-30.54v17.631l30.54-17.631v-17.632h-30.54v-.001zm-91.62 88.162l30.54-17.633h-30.54v17.633zm-30.54-17.633h30.54V196.44l-30.54 17.632zM86.222 319.865h30.54v-17.633l-30.54 17.632zm-30.54-17.632l30.54-17.632-30.54-17.633v35.264l30.54 17.633v-17.633h-30.54zm61.08 35.264l30.54-17.632h-30.54v17.632zm-30.54-88.162l-30.54 17.633h30.54v-17.633zm30.54 17.633h-30.54V284.6l30.54-17.632zm30.54 123.425l30.54-17.632H147.3v17.632zm-30.54-52.896l-30.54 17.632 30.54 17.632v35.265l30.54-17.632-30.54-17.633h30.54V355.13l-30.54 17.632v-35.264zm61.08 17.632H147.3l30.54 17.632V355.13zm-30.54-35.264v35.264l30.54-17.632-30.54-17.632 30.54-17.632H147.3v17.632zm0-35.264l-30.54 17.631h30.54v-17.631zm30.54 52.896v17.632h30.54l-30.54-17.632zm30.54-264.483l-30.54 17.632h30.54V73.014zm0 35.264l30.54-17.632h-30.54v17.632zm30.54-17.632l30.54 17.632V90.646h-30.54zM147.3 37.749l-30.54 17.633h30.54V37.749zm0 105.793V90.646h-30.54l30.54 17.632-30.54 17.632 30.54 17.633h30.54V125.91l-30.54 17.631zm-30.54-17.632v-17.632h-30.54l30.54 17.632zm-30.54-35.264h-30.54l30.54 17.632V90.646zm91.62 17.632h30.54l-30.54-17.632v17.632zm61.08 52.896l-30.54-17.632v17.633h30.54l-30.54 17.631 30.54 17.633v-35.264l30.54-17.633h-30.54v17.632zm91.62-52.896v35.265l30.54-17.632-30.54-17.633zm-61.08 35.265L300 125.91l-30.54-17.633v35.265L300 161.175v-17.632h-30.54zm-91.62 17.632l30.54-17.633h-30.54v17.633zm91.62 0v17.632L300 161.175h-30.54zm61.08-17.632L300 161.175h30.54v-17.632zm30.54 52.896l30.54 17.632V196.44h-30.54zm-91.62-17.632v17.632H300l-30.54-17.632zm-30.54 17.632l30.54 17.632V196.44h-30.54zm30.54 17.632L300 231.703v-17.632h-30.54zm61.08-17.632h30.54l-30.54-17.632v17.632zm-91.62-70.528l-30.54 17.632h30.54V125.91zm0-17.633v17.633l30.54-17.633h-30.54zm-61.08 193.954h30.54V284.6l-30.54 17.632zm91.62-17.631l-30.54-17.633h30.54v-17.633l-30.54 17.633v35.264h-30.54v17.632l-30.54-17.632v17.632h30.54l30.54-17.632 30.54 17.632v-17.632h-30.54l30.54-17.631zm0-.001L300 266.968h-30.54V284.6zm0 0v17.632H300L269.46 284.6zM300 231.704l30.54 17.633L300 266.968h30.54V214.071L300 231.703zm61.08-35.264l-30.54 17.632h30.54V196.44zM300 302.233l30.54-17.632L300 266.968v35.264zm61.08-52.898v-17.631l-30.54 17.631h30.54zM300 196.44v17.632h30.54L300 196.44zm0 52.897h-30.54L300 266.967v-17.633zm-61.08 88.16l30.54-17.631h-30.54v17.631zm122.16-105.792l30.54-17.633h-30.54v17.633zM147.3 425.658l30.54-17.632-15.27-8.816-15.27 26.448zm0 35.264l15.27-26.448-15.27-8.816v35.264l30.54 17.633V443.29l-30.54 17.632zm45.81-8.816l15.27-26.448-30.54 17.632 15.27 8.816zm15.27-61.712l-15.27-8.816-15.27 26.448 30.54-17.632zm0-35.265l-30.54 17.632 15.27 8.817 15.27-26.45zm152.7 193.955l-15.271-8.816-15.27 26.448 30.54-17.632zm30.54-88.161l-15.27-8.817-15.27 26.449 30.54-17.632zm-61.08 0l30.54-17.633-15.27-8.816-15.27 26.448v35.265l30.54-17.632v35.264l15.27-26.448-15.27-8.816-30.54-17.633zm15.27 79.345l15.27-26.449-30.54 17.633 15.27 8.816zm45.809-44.081v-35.264l-15.27 26.448 15.27 8.816zm15.27 8.816l-15.27-8.816v35.265l15.27-26.449zm-76.35-8.816v35.265l15.27-26.45-15.27-8.815zm0-70.529l15.27 8.816 15.27-26.448-30.54 17.632zm45.81-44.08l-15.27 26.448 30.54-17.632-15.27-8.816zm0 70.529l15.27-26.449-30.54 17.632 15.27 8.816zm30.54-52.897l15.27 8.816-30.54 17.632 15.27 8.816 15.27-26.448 15.27-26.449-15.27-8.815-15.27 26.448zm-15.27-44.081l-15.27-8.816-15.27 26.448v-35.264l-30.54 17.632 15.27-26.448-15.27-8.816v35.264l30.54 17.632 30.54-17.632 30.54 17.632v-35.264l-30.54 17.632 15.27-26.448-15.27-8.816 30.54-17.632-15.27-8.817-15.27 26.449v35.264zM330.541 284.6l15.27 8.816 15.27-26.447v35.263l-15.27-8.816-15.27 26.449 30.54-17.633 15.27-26.448-15.27-8.816-30.54 17.632zm30.54-17.632l30.54-17.633h-30.54v17.633zM345.81 399.21l15.27-26.449-30.54 17.633 15.27 8.816zM452.7 284.6l-30.54 17.632 30.54 17.633V284.6zm-91.62 52.897l15.27 8.816 15.27-26.448-30.54 17.632zm30.54-88.161l-15.27 26.448 15.27 8.816v-35.264zm30.54 17.632L391.62 284.6l15.27 8.816 15.27-26.448z"
          ></path>
        </svg>
      </article>
    </section>
  );
}
