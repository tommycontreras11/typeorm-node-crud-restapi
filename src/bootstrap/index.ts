import { Server } from 'http'
import { Server as ServerSSL } from 'https'
import databases from './databases'
export default async (server: Server | ServerSSL, callback: VoidFunction) => {
	await databases()
	callback()
}
