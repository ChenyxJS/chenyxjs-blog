import { withInstallFunction } from '@/utils/install'

import Notify from './src/notify'

export const Notification = withInstallFunction(Notify, '$notify')
export default Notification

export * from './src/notification'
