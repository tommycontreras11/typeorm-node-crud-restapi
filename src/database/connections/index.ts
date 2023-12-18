import 'reflect-metadata'

import { DataSource } from 'typeorm'
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions'
import ormconfig from '../../config/ormconfig'
import logger from '../../libs/logger.lib'

const connection: DataSource = new DataSource(ormconfig as PostgresConnectionOptions)

export const createDataSourceConnections = () => {
    return new Promise(async (resolve) => {
        logger.info('Connecting database')
        try {
            await connection.initialize()
            logger.info('Database connected successfully')
            resolve(true)
        } catch (error) {
            logger.error('Could not connected database', { error })
        }
    })
}

export const closeDataSourceConnections = () => {
    return new Promise(async (resolve) => {
        try {
            if (!connection) return
            await connection.destroy()
            logger.info('Database connection closed successfully')
            resolve(true)
        } catch (error) {
            logger.error('Could not close database connection', { error })
        }
    })
}

export default connection
