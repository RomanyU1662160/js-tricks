const findFirstRepeatedChar = (input: string) => {
  if (!input) return null
  const seen = new Set()

  for (const char of input) {
    if (seen.has(char)) {
      return char
    }
    seen.add(char)
  }
  return null
}

/// using map

const findFirstRepeatedChar2 = (input: string) => {
  if (!input) return null

  const counts = new Map<String, number>()

  // First loop: count characters
  for (const char of input) {
    counts.set(char, (counts.get(char) || 0) + 1)
  }

  // second loop, return the first char with count bigger than 1
  for (const char of input) {
    if (counts.get(char)! > 1) {
      return char
    }
  }
  // return null
  return null
}
