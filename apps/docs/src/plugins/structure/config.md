---
order: 2
---

# Configuring A Plugin

This reference page covers the config types available in `plugin.json`. If you're using the plugin template, you don't need to add anything—it will work as is. If you're building from scratch or want to customize further, you can skim through this page for the essentials.


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
      <td>The internal name of your plugin. Make sure it's unique, we don't want any name clashing.</td>
    </tr>
    <tr>
      <td>common_name</td>
      <td>✅</td>
      <td>The human readable name of your plugin - this is what will show in Millennium's plugin manager</td>
    </tr>
    <tr>
      <td>description</td>
      <td>✅</td>
      <td>The human readable description of your plugin - this is what will show in Millennium's plugin manager</td>
    </tr>
    <tr>
      <td>version</td>
      <td>❌</td>
      <td>The version of your plugin.</td>
    </tr>
    <tr>
      <td>useBackend</td>
      <td>❌</td>
      <td>Whether or not your plugin uses a backend</td>
    </tr>
    <tr>
      <td>backend</td>
      <td>❌</td>
      <td>The relative path to the frontend directory. If not provided, the default folder is <code>frontend</code>.</td>
    </tr>
    <tr>
      <td>frontend</td>
      <td>❌</td>
      <td>The relative path to the backend directory. If not provided, the default folder is <code>backend</code>.</td>
    </tr>
    <tr>
      <td>backendType</td>
      <td>❌</td>
      <td>Either <code>lua</code> or <code>python</code>. All new Millennium plugins - including yours - needs to be written in Lua. 
      This option is simply for compatibility with legacy plugins. Python support will be completely dropped in a future release.</td>
    </tr>
  </tbody>
</table>
