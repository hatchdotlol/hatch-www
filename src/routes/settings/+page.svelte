<script lang="ts">
  let { data } = $props();
  let currentUser = $state(data.user);
</script>

{#if currentUser}
  <div class="sett-title">
    <h1>Settings</h1>
  </div>
  <div class="box">
    <div>
      <div class="section">
        {#if currentUser.hatchTeam}
          <div class="hatchpanel">
            <div class="userpanel-title">
              <h4>scary hatch team settings</h4>
            </div>
            woah so scawwwy 3:
          </div>
        {/if}
        <div class="userpanel">
          <div class="userpanel-title">
            <h4>Your Profile</h4>
          </div>
          <p></p>
          <div class="split-in-half">
            <div class="userpanel" style="height: 196px;">
              <img
                src="https://api.hatch.lol/users/{currentUser.name}/pfp"
                alt="your profile picture"
                height="128px"
              />
              <p style="margin: 0; padding: 0;">{currentUser.displayName} (@{currentUser.name})</p>
            </div>
            <div class="userpanel" style="height: 196px; flex: 1;">
              <div class="userpanel-title">
                <h4>Your Bio</h4>
              </div>
              <textarea class="largetextinput">{currentUser.bio}</textarea>
              {#if currentUser.hatchTeam}
                <p style="font-size: 0.75rem; color: var(--accent);">
                  huzzah! you dont have a limit on the length, you glorious hatch team member.
                </p>
              {:else}
                <p style="font-size: 0.75rem; color: var(--accent);">max length: 300 characters.</p>
              {/if}
            </div>
          </div>
          <div class="home-news-big-bottom">
            <!-- svelte-ignore a11y_invalid_attribute -->
            <a href="#" class="pill-btn"><i class="fa-solid fa-plus"></i>&ensp; Change avatar</a>
            <!-- svelte-ignore a11y_invalid_attribute -->
            <a href="#" class="pill-btn"><i class="fa-solid fa-x"></i>&ensp; Remove avatar</a>
            <a href="#" class="pill-btn"><i class="fa-solid fa-refresh"></i>&ensp; Cancel changes</a
            >
            <a href="#" class="pill-btn" title="this is so redundant lol 🎉"
              ><i class="fa-solid fa-check"></i>&ensp; Save Bio</a
            >
          </div>
          <div class="userpanel-imageholder"></div>
        </div>
        <p></p>
        <div class="userpanel">
          <div>
            <div class="userpanel-title">
              <h4>Location</h4>
            </div>
            <p></p>
            <select class="expandable-input" bind:value={currentUser.country}>
              <option value="" disabled selected>Select your country</option>
              <option value="Location Not Given">Location Not Given</option>
              <option value="Afghanistan">Afghanistan</option>
              <option value="Åland Islands">Åland Islands</option>
              <option value="Albania">Albania</option>
              <option value="Algeria">Algeria</option>
              <option value="American Samoa">American Samoa</option>
              <option value="Andorra">Andorra</option>
              <option value="Angola">Angola</option>
              <option value="Anguilla">Anguilla</option>
              <option value="Antarctica">Antarctica</option>
              <option value="Antigua and Barbuda">Antigua and Barbuda</option>
              <option value="Argentina">Argentina</option>
              <option value="Armenia">Armenia</option>
              <option value="Aruba">Aruba</option>
              <option value="Australia">Australia</option>
              <option value="Austria">Austria</option>
              <option value="Azerbaijan">Azerbaijan</option>
              <option value="Bahamas">Bahamas</option>
              <option value="Bahrain">Bahrain</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Barbados">Barbados</option>
              <option value="Belarus">Belarus</option>
              <option value="Belgium">Belgium</option>
              <option value="Belize">Belize</option>
              <option value="Benin">Benin</option>
              <option value="Bermuda">Bermuda</option>
              <option value="Bhutan">Bhutan</option>
              <option value="Bolivia (Plurinational State of)"
                >Bolivia (Plurinational State of)</option
              >
              <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
              <option value="Botswana">Botswana</option>
              <option value="Bouvet Island">Bouvet Island</option>
              <option value="Brazil">Brazil</option>
              <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
              <option value="Brunei Darussalam">Brunei Darussalam</option>
              <option value="Bulgaria">Bulgaria</option>
              <option value="Burkina Faso">Burkina Faso</option>
              <option value="Burundi">Burundi</option>
              <option value="Cabo Verde">Cabo Verde</option>
              <option value="Cambodia">Cambodia</option>
              <option value="Cameroon">Cameroon</option>
              <option value="Canada">Canada</option>
              <option value="Caribbean Netherlands">Caribbean Netherlands</option>
              <option value="Cayman Islands">Cayman Islands</option>
              <option value="Central African Republic">Central African Republic</option>
              <option value="Chad">Chad</option>
              <option value="Chile">Chile</option>
              <option value="China">China</option>
              <option value="Christmas Island">Christmas Island</option>
              <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
              <option value="Colombia">Colombia</option>
              <option value="Comoros">Comoros</option>
              <option value="Congo">Congo</option>
              <option value="Congo, Democratic Republic of the"
                >Congo, Democratic Republic of the</option
              >
              <option value="Cook Islands">Cook Islands</option>
              <option value="Costa Rica">Costa Rica</option>
              <option value="Croatia">Croatia</option>
              <option value="Cuba">Cuba</option>
              <option value="Curaçao">Curaçao</option>
              <option value="Cyprus">Cyprus</option>
              <option value="Czech Republic">Czech Republic</option>
              <option value="Côte d'Ivoire">Côte d'Ivoire</option>
              <option value="Denmark">Denmark</option>
              <option value="Djibouti">Djibouti</option>
              <option value="Dominica">Dominica</option>
              <option value="Dominican Republic">Dominican Republic</option>
              <option value="Ecuador">Ecuador</option>
              <option value="Egypt">Egypt</option>
              <option value="El Salvador">El Salvador</option>
              <option value="Equatorial Guinea">Equatorial Guinea</option>
              <option value="Eritrea">Eritrea</option>
              <option value="Estonia">Estonia</option>
              <option value="Eswatini (Swaziland)">Eswatini (Swaziland)</option>
              <option value="Ethiopia">Ethiopia</option>
              <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
              <option value="Faroe Islands">Faroe Islands</option>
              <option value="Fiji">Fiji</option>
              <option value="Finland">Finland</option>
              <option value="France">France</option>
              <option value="French Guiana">French Guiana</option>
              <option value="French Polynesia">French Polynesia</option>
              <option value="French Southern Territories">French Southern Territories</option>
              <option value="Gabon">Gabon</option>
              <option value="Gambia">Gambia</option>
              <option value="Georgia">Georgia</option>
              <option value="Germany">Germany</option>
              <option value="Ghana">Ghana</option>
              <option value="Gibraltar">Gibraltar</option>
              <option value="Greece">Greece</option>
              <option value="Greenland">Greenland</option>
              <option value="Grenada">Grenada</option>
              <option value="Guadeloupe">Guadeloupe</option>
              <option value="Guam">Guam</option>
              <option value="Guatemala">Guatemala</option>
              <option value="Guernsey">Guernsey</option>
              <option value="Guinea">Guinea</option>
              <option value="Guinea-Bissau">Guinea-Bissau</option>
              <option value="Guyana">Guyana</option>
              <option value="Haiti">Haiti</option>
              <option value="Heard Island and Mcdonald Islands"
                >Heard Island and Mcdonald Islands</option
              >
              <option value="Honduras">Honduras</option>
              <option value="Hong Kong">Hong Kong</option>
              <option value="Hungary">Hungary</option>
              <option value="Iceland">Iceland</option>
              <option value="India">India</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Iran">Iran</option>
              <option value="Iraq">Iraq</option>
              <option value="Ireland">Ireland</option>
              <option value="Isle of Man">Isle of Man</option>
              <option value="Israel">Israel</option>
              <option value="Italy">Italy</option>
              <option value="Jamaica">Jamaica</option>
              <option value="Japan">Japan</option>
              <option value="Jersey">Jersey</option>
              <option value="Jordan">Jordan</option>
              <option value="Kazakhstan">Kazakhstan</option>
              <option value="Kenya">Kenya</option>
              <option value="Kiribati">Kiribati</option>
              <option value="Korea, North">Korea, North</option>
              <option value="Korea, South">Korea, South</option>
              <option value="Kosovo">Kosovo</option>
              <option value="Kuwait">Kuwait</option>
              <option value="Kyrgyzstan">Kyrgyzstan</option>
              <option value="Lao People's Democratic Republic"
                >Lao People's Democratic Republic</option
              >
              <option value="Latvia">Latvia</option>
              <option value="Lebanon">Lebanon</option>
              <option value="Lesotho">Lesotho</option>
              <option value="Liberia">Liberia</option>
              <option value="Libya">Libya</option>
              <option value="Liechtenstein">Liechtenstein</option>
              <option value="Lithuania">Lithuania</option>
              <option value="Luxembourg">Luxembourg</option>
              <option value="Macao">Macao</option>
              <option value="Macedonia North">Macedonia North</option>
              <option value="Madagascar">Madagascar</option>
              <option value="Malawi">Malawi</option>
              <option value="Malaysia">Malaysia</option>
              <option value="Maldives">Maldives</option>
              <option value="Mali">Mali</option>
              <option value="Malta">Malta</option>
              <option value="Marshall Islands">Marshall Islands</option>
              <option value="Martinique">Martinique</option>
              <option value="Mauritania">Mauritania</option>
              <option value="Mauritius">Mauritius</option>
              <option value="Mayotte">Mayotte</option>
              <option value="Mexico">Mexico</option>
              <option value="Micronesia">Micronesia</option>
              <option value="Moldova">Moldova</option>
              <option value="Monaco">Monaco</option>
              <option value="Mongolia">Mongolia</option>
              <option value="Montenegro">Montenegro</option>
              <option value="Montserrat">Montserrat</option>
              <option value="Morocco">Morocco</option>
              <option value="Mozambique">Mozambique</option>
              <option value="Myanmar (Burma)">Myanmar (Burma)</option>
              <option value="Namibia">Namibia</option>
              <option value="Nauru">Nauru</option>
              <option value="Nepal">Nepal</option>
              <option value="Netherlands">Netherlands</option>
              <option value="Netherlands Antilles">Netherlands Antilles</option>
              <option value="New Caledonia">New Caledonia</option>
              <option value="New Zealand">New Zealand</option>
              <option value="Nicaragua">Nicaragua</option>
              <option value="Niger">Niger</option>
              <option value="Nigeria">Nigeria</option>
              <option value="Niue">Niue</option>
              <option value="Norfolk Island">Norfolk Island</option>
              <option value="Northern Mariana Islands">Northern Mariana Islands</option>
              <option value="Norway">Norway</option>
              <option value="Oman">Oman</option>
              <option value="Pakistan">Pakistan</option>
              <option value="Palau">Palau</option>
              <option value="Palestine">Palestine</option>
              <option value="Panama">Panama</option>
              <option value="Papua New Guinea">Papua New Guinea</option>
              <option value="Paraguay">Paraguay</option>
              <option value="Peru">Peru</option>
              <option value="Philippines">Philippines</option>
              <option value="Pitcairn Islands">Pitcairn Islands</option>
              <option value="Poland">Poland</option>
              <option value="Portugal">Portugal</option>
              <option value="Puerto Rico">Puerto Rico</option>
              <option value="Qatar">Qatar</option>
              <option value="Reunion">Reunion</option>
              <option value="Romania">Romania</option>
              <option value="Russian Federation">Russian Federation</option>
              <option value="Rwanda">Rwanda</option>
              <option value="Saint Barthelemy">Saint Barthelemy</option>
              <option value="Saint Helena">Saint Helena</option>
              <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
              <option value="Saint Lucia">Saint Lucia</option>
              <option value="Saint Martin">Saint Martin</option>
              <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
              <option value="Saint Vincent and the Grenadines"
                >Saint Vincent and the Grenadines</option
              >
              <option value="Samoa">Samoa</option>
              <option value="San Marino">San Marino</option>
              <option value="Sao Tome and Principe">Sao Tome and Principe</option>
              <option value="Saudi Arabia">Saudi Arabia</option>
              <option value="Senegal">Senegal</option>
              <option value="Serbia">Serbia</option>
              <option value="Serbia and Montenegro">Serbia and Montenegro</option>
              <option value="Seychelles">Seychelles</option>
              <option value="Sierra Leone">Sierra Leone</option>
              <option value="Singapore">Singapore</option>
              <option value="Sint Maarten">Sint Maarten</option>
              <option value="Slovakia">Slovakia</option>
              <option value="Slovenia">Slovenia</option>
              <option value="Solomon Islands">Solomon Islands</option>
              <option value="Somalia">Somalia</option>
              <option value="South Africa">South Africa</option>
              <option value="South Georgia and the South Sandwich Islands"
                >South Georgia and the South Sandwich Islands</option
              >
              <option value="South Sudan">South Sudan</option>
              <option value="Spain">Spain</option>
              <option value="Sri Lanka">Sri Lanka</option>
              <option value="Sudan">Sudan</option>
              <option value="Suriname">Suriname</option>
              <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
              <option value="Sweden">Sweden</option>
              <option value="Switzerland">Switzerland</option>
              <option value="Syria">Syria</option>
              <option value="Taiwan">Taiwan</option>
              <option value="Tajikistan">Tajikistan</option>
              <option value="Tanzania">Tanzania</option>
              <option value="Thailand">Thailand</option>
              <option value="Timor-Leste">Timor-Leste</option>
              <option value="Togo">Togo</option>
              <option value="Tokelau">Tokelau</option>
              <option value="Tonga">Tonga</option>
              <option value="Trinidad and Tobago">Trinidad and Tobago</option>
              <option value="Tunisia">Tunisia</option>
              <option value="Turkey (Türkiye)">Turkey (Türkiye)</option>
              <option value="Turkmenistan">Turkmenistan</option>
              <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
              <option value="Tuvalu">Tuvalu</option>
              <option value="U.S. Outlying Islands">U.S. Outlying Islands</option>
              <option value="Uganda">Uganda</option>
              <option value="Ukraine">Ukraine</option>
              <option value="United Arab Emirates">United Arab Emirates</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="United States">United States</option>
              <option value="Uruguay">Uruguay</option>
              <option value="Uzbekistan">Uzbekistan</option>
              <option value="Vanuatu">Vanuatu</option>
              <option value="Vatican City Holy See">Vatican City Holy See</option>
              <option value="Venezuela">Venezuela</option>
              <option value="Vietnam">Vietnam</option>
              <option value="Virgin Islands, British">Virgin Islands, British</option>
              <option value="Virgin Islands, U.S">Virgin Islands, U.S</option>
              <option value="Wallis and Futuna">Wallis and Futuna</option>
              <option value="Western Sahara">Western Sahara</option>
              <option value="Yemen">Yemen</option>
              <option value="Zambia">Zambia</option>
              <option value="Zimbabwe">Zimbabwe</option>
            </select>
          </div>
        </div>
        <p></p>
        <div class="userpanel">
          <div>
            <div class="userpanel-title">
              <h4>Name</h4>
            </div>
            <p>
              <b>Your username is @{currentUser.name}.</b> You cannot change your username unless there's
              a problem with it, in which case you'd have to contact the Hatch Team.
            </p>
            <p>
              As an alternative, you can change your Display Name to something besides your
              username.
            </p>
            <label><b>Display Name</b></label><input
              type="text"
              class="expandable-input"
              placeholder="Display Name"
              value={currentUser.displayName}
            />
          </div>
        </div>
        <p></p>
        <div class="userpanel">
          <div class="userpanel-title">
            <h4>Banner</h4>
          </div>
          <p>
            Please use the direct link to your image, e.g. <a
              href="https://imgs.xkcd.com/comics/international_station.png"
              >https://imgs.xkcd.com/comics/international_station.png</a
            >
            but not <a href="https://xkcd.com/3195/">https://xkcd.com/3195/</a>.
          </p>
          <label><b>Banner URL</b></label>
          <input
            type="text"
            class="expandable-input"
            placeholder="Banner URL"
            value={currentUser.bannerImage}
          />
          <p></p>
          <img src={currentUser.bannerImage} alt="your profile picture" height="128px" />
        </div>
        <p></p>
      </div>
      <div class="userpanel">
        <div class="userpanel-title">
          <h4>Email</h4>
        </div>
        <p>If you intend on changing your email, verification is required.</p>
        <input
          type="text"
          class="expandable-input"
          placeholder="Email"
          value="this is awaiting implementation..."
        />
      </div>
      <p></p>
      <div class="userpanel">
        <div class="userpanel-title">
          <h4>Password</h4>
        </div>
        <p>
          If you intend on changing your password, verification is required. Beware of fake password
          request emails!!
        </p>
        <input
          type="text"
          class="expandable-input"
          placeholder="Email"
          value="this is awaiting implementation..."
        />
      </div>
      <div class="home-news-big-bottom">
        <!-- svelte-ignore a11y_invalid_attribute -->
        <a href="#" class="pill-btn"><i class="fa-solid fa-check"></i>&ensp;Save changes</a>
      </div>
    </div>
  </div>

  <!---->
  <div style="margin-top: 1rem;">
    You can access your publicly available data at <a
      href="https://api.hatch.lol/users/{currentUser.name}"
      >https://api.hatch.lol/users/{currentUser.name}</a
    > if you were curious.
  </div>
{:else}
  <p>
    You must be logged in to view this page. <a href="/login">Log in</a> or
    <a href="/"> go home.</a>
  </p>
{/if}

<style>
  .split-in-half {
    display: flex;
    gap: 1rem;
  }
  .expandable-input {
    min-width: 80%;
  }
  .userpanel-imageholder {
    gap: 0.5rem;
    float: center;
  }
  .sett-title {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex: 1;
  }
  .userpanel {
    /* margin-top: 0.75rem; */
    padding: 1rem;
    /* box-shadow: 0 0 1rem 0 #ffbd59cc; */
    border-radius: 0.75rem;
    background-color: var(--block1);
    border: 1px solid #ffbd59;
    height: fit-content;
        overflow-y: scroll;
        scrollbar-width: none;
  }
  .box {
    /* margin-top: 0.75rem; */
    padding: 1rem;
    box-shadow: 0 0 1rem 0 #ffbd59cc;
    border-radius: 0.75rem;
    background-color: var(--block1);
    border: 1px solid #ffbd59;
    height: fit-content;
    margin-top: 1rem;
    overflow-y: hidden;
  }
  .hatchpanel {
    /* margin-top: 0.75rem; */
    padding: 1rem;
    box-shadow: 0 0 1rem 0 #ff5959cc;
    border-radius: 0.75rem;
    margin-bottom: 2rem;
    background-color: var(--block1);
    border: 1px solid #ff5959;
    height: fit-content;
    margin-top: 1rem;
  }
  .box h3 {
    font-size: 2rem;
    margin: 1rem 0;
  }
  .box h4 {
    font-size: 1rem;
    margin: 0;
    margin-top: 1rem;
  }
  .home-news-big-bottom {
    padding-top: 1em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: right;
  }

  @media (max-width: 768px) {
    .home-news-big-bottom {
      flex-direction: column;
      gap: 1rem;
      align-items: flex-end;
    }
  }
  .userpanel-title h4 {
    font-size: 1.5rem;
    margin: 0;
  }
  .largetextinput {
    width: 100%;
    height: 2.5rem;
    height: 60%;
    font-size: 1rem;
    border-radius: 0.5rem;
    padding: 0.5rem;
    resize: none;
    padding-bottom: 0rem;
    font-family: "Outfit", sans-serif;
  }
</style>
