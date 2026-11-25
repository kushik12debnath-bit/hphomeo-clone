import fs from 'node:fs'
import path from 'node:path'

const outDir = path.join(process.cwd(), 'public', 'images', 'doctors')
fs.mkdirSync(outDir, { recursive: true })

const photos = [
  ['ananya-sen.jpg', 'photo-1559839734-2b71ea197ec2'],
  ['arjun-mehta.jpg', 'photo-1612349317150-e413f6a5b16d'],
  ['priya-nair.jpg', 'photo-1594824476967-48c8b964273f'],
  ['rohan-das.jpg', 'photo-1622253692010-333f2da6031d'],
  ['ishita-roy.jpg', 'photo-1651008376811-b90baee60c1f'],
  ['vikram-bose.jpg', 'photo-1537368910025-700350fe46c7'],
  ['meera-iyer.jpg', 'photo-1582750433449-648ed127bb54'],
  ['sanjay-gupta.jpg', 'photo-1591604021695-0c69b7c05981'],
]

for (const [filename, id] of photos) {
  const url = `https://images.unsplash.com/${id}?auto=format&fit=crop&w=480&h=480&q=80`
  const response = await fetch(url)
  if (!response.ok) throw new Error(`${filename}: ${response.status}`)
  const buffer = Buffer.from(await response.arrayBuffer())
  fs.writeFileSync(path.join(outDir, filename), buffer)
  console.log(filename, buffer.length)
}
