function Node(x, y, parent = null) {
    return { x, y, parent }
  }
  
  function isInside(x, y) {
    if (x >= 1 && x <= 8 && y >= 1 && y <= 8) return true
    return false
  }
  
  function path(node) {
    count = -1
    while (node) {
      console.log(node)
      node = node.parent
      count++
    }
    return count
  }
  
  function minMoves(start, end) {
    if (!isInside(start[0], start[1]) || !isInside(end[0], end[1])) return
  
    let dx = [-2, -1, 1, 2, -2, -1, 1, 2]
    let dy = [-1, -2, -2, -1, 1, 2, 2, 1]
    let q = []
  
    q.push(new Node(start[0], start[1]))
  
    let visited = [start.join("")]
  
    while (q.length) {
      let current = q.shift()
      if (current.x == end[0] && current.y == end[1]) return path(current)
  
      for (let i = 0; i < 8; i++) {
        let x = current.x + dx[i]
        let y = current.y + dy[i]
  
        if (isInside(x, y) && !visited.includes(`${x}${y}`)) {
          visited.push(`${x}${y}`)
          q.push(new Node(x, y, current))
        }
      }
    }
    return Number.MAX_VALUE
  }
  
console.log(minMoves([3, 3], [4, 3]));