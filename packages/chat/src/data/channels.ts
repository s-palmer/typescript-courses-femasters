import { apiCall } from '../utils/networking'
import type { IChannel } from '../types'

const cachedChannelRecords = {}

export async function getChannelById(id: string): Promise<IChannel> {
  let cached = cachedChannelRecords[id]
  if (typeof cached !== 'undefined') return await cached
  cached = cachedChannelRecords[id] = apiCall(`Channels/${id}`)

  return await cached
}
