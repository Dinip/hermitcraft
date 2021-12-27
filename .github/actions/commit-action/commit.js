const core = require('@actions/core')
const github = require('@actions/github')
const fs = require('fs')

async function run () {
  try {
    eval(fs.readFileSync('./season8/markers.js', 'utf-8'))

    const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN')
    const octokit = github.getOctokit(GITHUB_TOKEN)

    const ref = 'heads/master'
    const refResponse = await octokit.rest.git.getRef({
      ...github.context.repo,
      ref,
    })
    const sha = refResponse.data.object.sha

    const oldMarkers = MAPCRAFTER_MARKERS
    let markerSets = { markerSets: [] }

    oldMarkers.forEach(group => {
      let newGroup = {
        id: group.id,
        label: group.name,
        toggleable: true,
        defaultHide: false,
        marker: []
      }
      group.markers.world.forEach(marker => {
        let newMarker = {
          id: marker.title.replace(/\W/gi, '_'),
          type: "poi",
          map: "world",
          position: { x: marker.pos[0], y: marker.pos[2], z: marker.pos[1] },
          label: marker.title,
          icon: `https://raw.githubusercontent.com/Dinip/hermitcraft/master/icons/${marker.icon}`,
          minDistance: 0.0,
          maxDistance: 10000000.0
        }
        newGroup.marker.push(newMarker)
      })
      markerSets.markerSets.push(newGroup)
    })

    const content = Buffer.from(JSON.stringify(markerSets, null, 2)).toString('base64')

    const blobResponse = await octokit.rest.git.createBlob({
      ...github.context.repo,
      encoding: 'base64',
      content,
    })

    const blobSha = blobResponse.data.sha
    const tree = []
    tree.push({
      path: 'season8/markers.json',
      mode: '100644',
      type: 'blob',
      sha: blobSha,
    })

    const treeResponse = await octokit.rest.git.createTree({
      ...github.context.repo,
      base_tree: sha,
      tree: tree,
    })

    const message = `Update markers file`
    const commitResponse = await octokit.rest.git.createCommit({
      ...github.context.repo,
      message,
      tree: treeResponse.data.sha,
      parents: [sha],
    })

    const updateRefResponse = await octokit.rest.git.updateRef({
      ...github.context.repo,
      ref: 'heads/master',
      sha: commitResponse.data.sha,
      force: false,
    })
    console.log({ updateRefResponse: updateRefResponse.data })
    console.log('Done')
  } catch (error) {
    core.setFailed(`Debug-action failure: ${error}`)
  }
}

run()

module.exports = run