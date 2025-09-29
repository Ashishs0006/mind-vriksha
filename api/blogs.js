// module.exports = async (req, res) => {
//   // Set CORS headers
//   res.setHeader('Access-Control-Allow-Credentials', true);
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
//   res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

//   if (req.method === 'OPTIONS') {
//     res.status(200).end();
//     return;
//   }

//   if (req.method === 'GET') {
//     // Handle blog-related API requests
//     const { slug } = req.query;
    
//     // Your blog logic here
//     res.status(200).json({
//       success: true,
//       message: 'Blog API endpoint',
//       slug: slug
//     });
//   } else {
//     res.setHeader('Allow', ['GET']);
//     res.status(405).json({
//       success: false,
//       message: `Method ${req.method} Not Allowed`
//     });
//   }
// };