<template>
  <NavbarTwo />

  <!-- Hero Section -->
  <div class="setup-hero-area bg-secondary pb-100 pt-100">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-8 col-md-12 m-auto text-center">
          <div class="hero-content">
            <h1 class="text-white mb-4">Setup Guide</h1>
            <p class="text-white mb-5">Follow our step-by-step instructions to set up ShowTime Live TV on your preferred device</p>
          </div>
        </div>
      </div>
    </div>

    <img
      src="@/assets/images/shape-20.png"
      class="shape-21 shape"
      alt="shape"
    />
    <img
      src="@/assets/images/shape-21.png"
      class="shape-22 shape"
      alt="shape"
    />
  </div>

  <!-- Setup Guide Section -->
  <div class="setup-guide-area bg-gondola pt-100 pb-100">
    <div class="container">
      <div class="section-title text-center mb-5">
        <span class="top-title">SETUP INSTRUCTIONS</span>
        <h2 class="text-white">Choose Your Device</h2>
        <p class="text-silver mt-3">Select your device type below to see specific setup instructions</p>
      </div>

      <div class="row">
        <div class="col-lg-12">
          <!-- Device Selection Tabs -->
          <ul class="nav nav-tabs justify-content-center mb-5" id="deviceTabs" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="firestick-tab"
                data-bs-toggle="tab"
                data-bs-target="#firestick"
                type="button"
                role="tab"
                aria-controls="firestick"
                aria-selected="true"
              >
                Firestick
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="android-tab"
                data-bs-toggle="tab"
                data-bs-target="#android"
                type="button"
                role="tab"
                aria-controls="android"
                aria-selected="false"
              >
                Android TV Boxes
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="apple-tab"
                data-bs-toggle="tab"
                data-bs-target="#apple"
                type="button"
                role="tab"
                aria-controls="apple"
                aria-selected="false"
              >
                iPhone / Apple TV
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="samsung-tab"
                data-bs-toggle="tab"
                data-bs-target="#samsung"
                type="button"
                role="tab"
                aria-controls="samsung"
                aria-selected="false"
              >
                Samsung / LG TV
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="app-issues-tab"
                data-bs-toggle="tab"
                data-bs-target="#app-issues"
                type="button"
                role="tab"
                aria-controls="app-issues"
                aria-selected="false"
              >
                App Issues
              </button>
            </li>
          </ul>

          <!-- Tab Content -->
          <div class="tab-content" id="deviceTabsContent">
            <!-- Firestick Tab -->
            <div class="tab-pane fade show active" id="firestick" role="tabpanel" aria-labelledby="firestick-tab">
              <div class="setup-instructions bg-opacity-10 p-4 p-lg-5 rounded-3">
                <h3 class="text-white mb-4">How to setup on a Firestick</h3>
                <div class="setup-step mb-5">
                  <p class="text-silver mb-3">– On the home screen of your FireStick, you will find the menu bar on the top</p>
                  <p class="text-silver mb-4">In the menu bar, select Settings</p>
                  <div class="setup-img-container mb-3">
                    <img src="@/assets/images/1.jpg" alt="Firestick Home Screen" class="img-fluid rounded-3">
                  </div>
                </div>

                <div class="setup-step mb-5">
                  <p class="text-silver mb-4">– In the Settings, choose the option My Fire TV</p>
                  <div class="setup-img-container mb-3">
                    <img src="@/assets/images/2.jpg" alt="Firestick Settings" class="img-fluid rounded-3">
                  </div>
                </div>

                <div class="setup-step mb-5">
                  <p class="text-silver mb-4">– When the following set of options are displayed on the next screen, click Developer Options</p>
                  <div class="setup-img-container mb-3">
                    <img src="@/assets/images/3.jpg" alt="Firestick Developer Options" class="img-fluid rounded-3">
                  </div>
                </div>

                <div class="setup-step mb-5">
                  <p class="text-silver mb-4">– Now, you need to check whether Apps from Unknown Sources is OFF or ON</p>
                  <p class="text-silver mb-4">Click it once if it is OFF</p>
                  <div class="setup-img-container mb-3">
                    <img src="@/assets/images/4.jpg" alt="Firestick Unknown Sources" class="img-fluid rounded-3">
                  </div>
                </div>

                <div class="setup-step mb-5">
                  <p class="text-silver mb-4">– A quick warning message is displayed</p>
                  <p class="text-silver mb-4">To keep Apps from Unknown Sources switched on, click Turn on</p>
                  <div class="setup-img-container mb-3">
                    <img src="@/assets/images/5.jpg" alt="Firestick Warning" class="img-fluid rounded-3">
                  </div>
                </div>

                <div class="setup-step mb-5">
                  <p class="text-silver mb-4">With this, you have configured the FireStick settings to allow the installation of IPTV Smarters and other third-party apps. Follow the steps below:</p>
                  <h4 class="text-white mb-3">STEP 1:</h4>
                  <p class="text-silver mb-4">We will first install the Downloader app</p>
                  <p class="text-silver mb-4">This app will help you to install Official Edge Tv on FireStick</p>
                  <h4 class="text-white mb-3">STEP 2:</h4>
                  <p class="text-silver mb-4">Highlight the Search option on the home screen of FireStick</p>
                  <p class="text-silver mb-4">Type the name of the app (which is Downloader)</p>
                  <p class="text-silver mb-4">Click the Downloader option when it is displayed in the search results</p>
                  <p class="text-silver mb-4">Choose the Downloader icon on the following screen and download and install the app.</p>
                  <div class="setup-img-container mb-3">
                    <img src="@/assets/images/5.jpg" alt="Firestick Downloader" class="img-fluid rounded-3">
                  </div>
                </div>

                <div class="setup-step mb-5">
                  <h4 class="text-white mb-3">STEP 3:</h4>
                  <p class="text-silver mb-4">You may now open the Downloader app</p>
                  <p class="text-silver mb-4">When you run this app for the first time, a set of prompts will appear. Dismiss them until you see the following screen</p>
                  <p class="text-silver mb-4">On this screen, you need to click the URL textbox on the right side (make sure the Home option in the left menu is selected) where it says 'http://'</p>
                  <div class="setup-img-container mb-3">
                    <img src="@/assets/images/6.jpg" alt="Firestick Downloader App" class="img-fluid rounded-3">
                  </div>
                </div>

                <div class="setup-step mb-5">
                  <h4 class="text-white mb-3">STEP 4:</h4>
                  <p class="text-silver mb-4">Go ahead and enter the following code on this window: 193508</p>
                  <p class="text-silver mb-4">Click GO</p>
                  <h4 class="text-white mb-3">STEP 5:</h4>
                  <p class="text-silver mb-4">Give it a minute or two until the Edge Tv app is downloaded onto your FireStick device</p>
                  <div class="setup-img-container mb-3">
                    <img src="@/assets/images/7.jpg" alt="Firestick Download" class="img-fluid rounded-3">
                  </div>
                </div>

                <div class="setup-step mb-5">
                  <h4 class="text-white mb-3">STEP 6:</h4>
                  <p class="text-silver mb-4">When the download has completed, the Downloader app will run the APK file and the installation will start</p>
                  <p class="text-silver mb-4">Click Install</p>
                  <div class="setup-img-container mb-3">
                    <img src="@/assets/images/8.jpg" alt="Firestick Install" class="img-fluid rounded-3">
                  </div>
                </div>

                <div class="setup-step mb-5">
                  <h4 class="text-white mb-3">STEP 7:</h4>
                  <p class="text-silver mb-4">Wait for the installation to finish</p>
                  <h4 class="text-white mb-3">STEP 8:</h4>
                  <p class="text-silver mb-4">Installation is concluded with the App installed notification</p>
                  <p class="text-silver mb-4">You may now choose to click OPEN and get started with Edge Tv app</p>
                  <p class="text-silver mb-4">Great! You now have the Edge Tv app on FireStick.</p>
                  <div class="setup-img-container mb-3">
                    <img src="@/assets/images/9.jpg" alt="Firestick Complete" class="img-fluid rounded-3">
                  </div>
                </div>

                <div class="setup-step mb-5">
                  <h4 class="text-white mb-3">STEP 1:</h4>
                  <p class="text-silver mb-4">Open the app once downloaded and click on "Add user" then login with the details provided</p>
                  <h4 class="text-white mb-3">STEP 3:</h4>
                  <p class="text-silver mb-4">Wait some seconds, and you're logged in now!</p>
                  <div class="setup-img-container mb-3">
                    <img src="@/assets/images/10.png" alt="Firestick Login" class="img-fluid rounded-3">
                  </div>
                </div>
              </div>
            </div>

            <!-- Android TV Boxes Tab -->
            <div class="tab-pane fade" id="android" role="tabpanel" aria-labelledby="android-tab">
              <div class="setup-instructions bg-opacity-10 p-4 p-lg-5 rounded-3">
                <h3 class="text-white mb-4">How to setup on Android TV Boxes</h3>
                <div class="setup-step mb-5">
                  <h4 class="text-white mb-3">STEP 1:</h4>
                  <p class="text-silver mb-4">Open the Google Play Store on your Android TV Box</p>

                  <h4 class="text-white mb-3">STEP 2:</h4>
                  <p class="text-silver mb-4">Search for "Edge TV" app in the search bar</p>

                  <h4 class="text-white mb-3">STEP 3:</h4>
                  <p class="text-silver mb-4">Select the app from the search results and click "Install"</p>

                  <h4 class="text-white mb-3">STEP 4:</h4>
                  <p class="text-silver mb-4">Once installed, open the app and click on "Add User"</p>

                  <h4 class="text-white mb-3">STEP 5:</h4>
                  <p class="text-silver mb-4">Enter your login credentials and click "Login"</p>

                  <h4 class="text-white mb-3">STEP 6:</h4>
                  <p class="text-silver mb-4">Wait a few moments for the app to load your subscription</p>

                  <h4 class="text-white mb-3">STEP 7:</h4>
                  <p class="text-silver mb-4">You're now ready to enjoy ShowTime Live TV on your Android TV Box!</p>

                  <div class="alert alert-info mt-4">
                    <p class="mb-0">Note: Images for this section will be added soon. Please follow the text instructions for now.</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- iPhone / Apple TV Tab -->
            <div class="tab-pane fade" id="apple" role="tabpanel" aria-labelledby="apple-tab">
              <div class="setup-instructions bg-opacity-10 p-4 p-lg-5 rounded-3">
                <h3 class="text-white mb-4">How to setup on iPhone / Apple TV</h3>
                <div class="setup-step mb-5">
                  <h4 class="text-white mb-3">STEP 1:</h4>
                  <p class="text-silver mb-4">Open the App Store on your iPhone or Apple TV</p>

                  <h4 class="text-white mb-3">STEP 2:</h4>
                  <p class="text-silver mb-4">Search for "IPTV Smarters" or "GSE Smart IPTV" in the search bar</p>

                  <h4 class="text-white mb-3">STEP 3:</h4>
                  <p class="text-silver mb-4">Download and install the app</p>

                  <h4 class="text-white mb-3">STEP 4:</h4>
                  <p class="text-silver mb-4">Open the app and select "Add User" or "Login with Xtream Codes"</p>

                  <h4 class="text-white mb-3">STEP 5:</h4>
                  <p class="text-silver mb-4">Enter the following information:</p>
                  <ul class="text-silver mb-4">
                    <li>Server URL: (Your provided server URL)</li>
                    <li>Username: (Your provided username)</li>
                    <li>Password: (Your provided password)</li>
                  </ul>

                  <h4 class="text-white mb-3">STEP 6:</h4>
                  <p class="text-silver mb-4">Click "Add User" or "Login" to proceed</p>

                  <h4 class="text-white mb-3">STEP 7:</h4>
                  <p class="text-silver mb-4">The app will download your channel list and you'll be ready to stream</p>

                  <div class="alert alert-info mt-4">
                    <p class="mb-0">Note: Images for this section will be added soon. Please follow the text instructions for now.</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Samsung / LG TV Tab -->
            <div class="tab-pane fade" id="samsung" role="tabpanel" aria-labelledby="samsung-tab">
              <div class="setup-instructions bg-opacity-10 p-4 p-lg-5 rounded-3">
                <h3 class="text-white mb-4">How to setup on Samsung / LG TV</h3>
                <div class="setup-step mb-5">
                  <h4 class="text-white mb-3">STEP 1:</h4>
                  <p class="text-silver mb-4">On your Samsung or LG Smart TV, navigate to the app store (Samsung Apps or LG Content Store)</p>

                  <h4 class="text-white mb-3">STEP 2:</h4>
                  <p class="text-silver mb-4">Search for "Smart IPTV" or "SS IPTV" app</p>

                  <h4 class="text-white mb-3">STEP 3:</h4>
                  <p class="text-silver mb-4">Download and install the app</p>

                  <h4 class="text-white mb-3">STEP 4:</h4>
                  <p class="text-silver mb-4">Launch the app and note the MAC address displayed on the activation screen</p>

                  <h4 class="text-white mb-3">STEP 5:</h4>
                  <p class="text-silver mb-4">Visit the website displayed on your TV screen from a computer or smartphone</p>

                  <h4 class="text-white mb-3">STEP 6:</h4>
                  <p class="text-silver mb-4">Enter your MAC address and the M3U playlist URL provided with your subscription</p>

                  <h4 class="text-white mb-3">STEP 7:</h4>
                  <p class="text-silver mb-4">Save the settings and return to your TV</p>

                  <h4 class="text-white mb-3">STEP 8:</h4>
                  <p class="text-silver mb-4">Restart the app on your TV and your channels should load</p>

                  <div class="alert alert-info mt-4">
                    <p class="mb-0">Note: Images for this section will be added soon. Please follow the text instructions for now.</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- App Issues Tab -->
            <div class="tab-pane fade" id="app-issues" role="tabpanel" aria-labelledby="app-issues-tab">
              <div class="setup-instructions bg-opacity-10 p-4 p-lg-5 rounded-3">
                <h3 class="text-white mb-4">Common App Issues & Solutions</h3>
                <div class="setup-step mb-5">
                  <h4 class="text-white mb-3">Issue 1: App Not Loading</h4>
                  <p class="text-silver mb-4">If the app is not loading or crashes on startup:</p>
                  <ul class="text-silver mb-4">
                    <li>Clear the app cache and data</li>
                    <li>Uninstall and reinstall the app</li>
                    <li>Check your internet connection</li>
                    <li>Restart your device</li>
                  </ul>

                  <h4 class="text-white mb-3">Issue 2: Playback Problems</h4>
                  <p class="text-silver mb-4">If you experience buffering or playback issues:</p>
                  <ul class="text-silver mb-4">
                    <li>Check your internet speed (minimum 10 Mbps recommended)</li>
                    <li>Close other applications running in the background</li>
                    <li>Try a different player (MX Player, VLC, etc.)</li>
                    <li>Change video quality settings within the app</li>
                  </ul>

                  <h4 class="text-white mb-3">Issue 3: Login Problems</h4>
                  <p class="text-silver mb-4">If you cannot log in to your account:</p>
                  <ul class="text-silver mb-4">
                    <li>Double-check your username and password</li>
                    <li>Ensure your subscription is active</li>
                    <li>Check if the server is down (contact support)</li>
                    <li>Try using a different app compatible with our service</li>
                  </ul>

                  <h4 class="text-white mb-3">Issue 4: Missing Channels</h4>
                  <p class="text-silver mb-4">If some channels are missing from your lineup:</p>
                  <ul class="text-silver mb-4">
                    <li>Refresh your playlist within the app</li>
                    <li>Clear app cache and restart</li>
                    <li>Check if your subscription package includes those channels</li>
                    <li>Contact support if specific channels are consistently unavailable</li>
                  </ul>

                  <div class="alert alert-info mt-4">
                    <p class="mb-0">Note: Images for this section will be added soon. Please follow the text instructions for now.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <SubscribeContent />
  <MainFooter class="bg-black" />
  <CopyRight />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavbarTwo from "@/components/Layouts/NavbarTwo.vue";
import SubscribeContent from "@/components/Common/SubscribeContent.vue";
import MainFooter from "@/components/Layouts/MainFooter.vue";
import CopyRight from "@/components/Layouts/CopyRight.vue";

export default defineComponent({
  name: "SetupGuidePage",
  components: {
    NavbarTwo,
    SubscribeContent,
    MainFooter,
    CopyRight,
  }
});
</script>

<style scoped>
.setup-hero-area {
  position: relative;
  padding-top: 120px;
  overflow: hidden;
}

.hero-content h1 {
  font-size: 3rem;
  font-weight: 700;
}

.bg-opacity-10 {
  background-color: rgba(255, 255, 255, 0.1);
}

.setup-img-container {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 30px;
}

.setup-img-container img {
  max-width: 100%;
  height: auto;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.setup-step {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 30px;
}

.setup-step:last-child {
  border-bottom: none;
}

.nav-tabs {
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.nav-tabs .nav-link {
  color: #b8adae;
  border: none;
  padding: 10px 20px;
  margin-right: 5px;
  border-radius: 5px 5px 0 0;
  transition: all 0.3s ease;
}

.nav-tabs .nav-link:hover {
  color: white;
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
}

.nav-tabs .nav-link.active {
  color: white;
  background-color: var(--primary);
  border: none;
}

.tab-content {
  padding-top: 30px;
}

.alert-info {
  background-color: rgba(0, 123, 255, 0.2);
  color: #cce5ff;
  border-color: rgba(0, 123, 255, 0.3);
}
</style>