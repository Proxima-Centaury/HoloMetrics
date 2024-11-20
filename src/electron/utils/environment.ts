const isCurrentEnvironment = (environment: string): boolean => process.env.NODE_ENV === environment;
const isDev = (): boolean => process.env.NODE_ENV === `development`;
const isProd = (): boolean => process.env.NODE_ENV === `production`;

export { isCurrentEnvironment, isDev, isProd };