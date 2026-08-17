---
order: 2
---

# Configuring A Theme

This reference page covers the config types available in `skin.json`. If you're using the theme template, you don't need to add anything—it will work as is. If you're building from scratch or want to customize further, you can skim through this page for the essentials.

## Index of property nodes

::: warning
If you're using `UseDefaultPatches`, do not use `Patches` or `Steam-Webkit`. These are generally reserved for developers **not** using `UseDefaultPatches`.
:::

<table>
	<thead>
		<tr>
			<th>Field</th>
			<th>Required</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>name</td>
			<td>✅</td>
			<td>A plain text name for your theme</td>
		</tr>
		<tr>
			<td>author</td>
			<td>✅</td>
			<td>The name of you the developer.</td>
		</tr>
		<tr>
			<td>description</td>
			<td>✅</td>
			<td>A basic description of the what the addon does.</td>
		</tr>
		<tr>
			<td>version</td>
			<td>❌</td>
			<td>Version representing the current update level. <a href="https://semver.org/">Semantic versioning</a> recommended.</td>
		</tr>
		<tr>
			<td colspan="3" class="section-header">
				<h6>Metadata that is rendered on <a href="https://steambrew.app">https://steambrew.app</a></h6>
			</td>
		</tr>
		<tr>
			<td>header_image</td>
			<td>✅</td>
			<td>the thumbnail of your theme when viewing from <a href="https://millennium.web.app/themes">here</a></td>
		</tr>
		<tr>
			<td>splash_image</td>
			<td>✅</td>
			<td>the background splash image when viewing from <a href="https://millennium.web.app/theme?id=F8h9ZhwOdoNygNcAfjIZ">here</a></td>
		</tr>
		<tr>
			<td>tags</td>
			<td>❌</td>
			<td>A list of tags describing your theme</td>
		</tr>
		<tr>
			<td><a href="#github-property-node">github</a></td>
			<td>✅</td>
			<td>An object defining GitHub properties</td>
		</tr>
		<tr>
			<td><a href="#discord-property-node">discord_support</a></td>
			<td>❌</td>
			<td>An object defining discord properties</td>
		</tr>
		<tr>
			<td colspan="3" class="section-header">
				<h6>Theme metadata information (Read warning above)</h6>
			</td>
		</tr>
		<tr>
			<td>Steam-WebKit</td>
			<td>❌</td>
			<td>relative path to CSS file, styles Steam store, community, etc.</td>
		</tr>
		<tr>
			<td><a href="#patches-property-node">Patches</a></td>
			<td>❌</td>
			<td>A list of patches that Millennium will evaluate</td>
		</tr>
		<tr>
			<td><a href="#default-patches">UseDefaultPatches</a></td>
			<td>❌</td>
			<td>tells Millennium to use a predefined schema of <code>Patches</code> for less clutter in your json.</td>
		</tr>
	</tbody>
</table>

### Patches Property Node

We go a little bit more into depth with `Patches` in [custom structuring](../intermediate/custom-structure#about-patches)

<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>MatchRegexString</td>
      <td>✅</td>
      <td>
        A regex search string that Millennium checks against:
        <ul>
          <li>The classname of the <code>&lt;body /&gt;</code> element in all Steam windows.</li>
          <li>The title (<code>window.title</code>) of all open Steam windows.</li>
          <li>The Steam browser view URL (i.e Steam store, community)</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>TargetCss</td>
      <td>❌</td>
      <td>A relative path to the CSS file that will be inserted if the regex match succeeds</td>
    </tr>
    <tr>
      <td>TargetJs</td>
      <td>❌</td>
      <td>A relative path to the JS file that will be inserted if the regex match succeeds</td>
    </tr>
  </tbody>
</table>

### GitHub Property Node

| Field     | Required | Description                                                                                                        |
| --------- | :------: | ------------------------------------------------------------------------------------------------------------------ |
| owner     | &#x2705; | the account name of the repository under the owners account. Ex: https://github.com/shdwmtr/simply-dark -> shdwmtr |
| repo_name | &#x2705; | the owner of the github repository. Ex: https://github.com/shdwmtr/simply-dark -> simply-dark                      |

### Discord Property Node

| Field                   | Required | Description                                                                                       |
| ----------------------- | :------: | ------------------------------------------------------------------------------------------------- |
| inviteCodeExcludingLink | &#x274C; | invite token of your discord server. example: https://discord.com/invite/NcNMP6r2Cw -> NcNMP6r2Cw |
