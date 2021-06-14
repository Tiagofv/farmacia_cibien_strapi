module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: 'http://54.207.188.131/',
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'ecd1ade37102f191057fb6b531d22dec'),
    },
  },
});
