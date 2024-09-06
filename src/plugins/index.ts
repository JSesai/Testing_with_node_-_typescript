//archivo de barril nos ayuda a manejar las importaciones de distintos archivos cenmtralizandolos en uno solo para cuando los requieras usar lo hagas desde un solo archivo

export { buildLogger } from './logger.plugin'
export { getAge } from './get-age.plugin'
export { createUUID } from './get-id.plugin'
export { httpClientPlugin as http } from './http-client.plugin'

