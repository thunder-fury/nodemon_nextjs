const jsonCsv = (json) => {
  const header = Object.keys(json[0]).join(',') + '\n'

  const body = json
    .map(function (d) {
      return Object.keys(d)
        .map(function (key) {
          return d[key]
        })
        .join(',')
    })
    .join('\n')

  return header + body
}

exports.jsonCsv = jsonCsv
