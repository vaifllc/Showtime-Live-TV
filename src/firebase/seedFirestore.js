const admin = require('firebase-admin')
const serviceAccount = require('./serviceAccountKey.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
})

const db = admin.firestore()

async function seedFirestore() {
  // 1. Create example users (one admin, one regular)
  const users = [
    {
      uid: 'adminUserUid1',
      fullName: 'Admin User',
      email: 'admin@example.com',
      createdAt: new Date(),
      admin: true,
      addresses: [
        {
          type: 'home',
          street: '123 Main St',
          city: 'New York',
          state: 'NY',
          zip: '10001',
          country: 'USA',
        },
      ],
      phone: '+1-555-1234',
    },
    {
      uid: 'regularUserUid1',
      fullName: 'Regular User',
      email: 'user@example.com',
      createdAt: new Date(),
      admin: false,
      addresses: [
        {
          type: 'home',
          street: '456 Oak Ave',
          city: 'Brooklyn',
          state: 'NY',
          zip: '11201',
          country: 'USA',
        },
      ],
      phone: '+1-555-5678',
    },
  ]

  for (const user of users) {
    await db.collection('users').doc(user.uid).set(user)
    console.log(`User ${user.email} created`)
  }

  // 2. Create example products (IPTV plans)
  const products = [
    {
      name: 'Trial IPTV Plan',
      description: 'Try our IPTV service for 7 days.',
      price: 0,
      currency: 'USD',
      duration: 0.25,
      features: ['HD Streaming', 'Limited Channels'],
      active: true,
      createdAt: new Date(),
    },
    {
      name: '3 Month IPTV Plan',
      description: 'Access to all channels for 3 months.',
      price: 29.99,
      currency: 'USD',
      duration: 3,
      features: ['HD Streaming', 'No Ads', 'Multi-device'],
      active: true,
      createdAt: new Date(),
    },
    {
      name: '12 Month IPTV Plan',
      description: 'Access to all channels for 12 months.',
      price: 99.99,
      currency: 'USD',
      duration: 12,
      features: ['HD Streaming', 'No Ads', 'Multi-device', 'Priority Support'],
      active: true,
      createdAt: new Date(),
    },
  ]

  for (const product of products) {
    await db.collection('products').add(product)
    console.log(`Product ${product.name} created`)
  }

  // 3. Create example payments
  const payments = [
    {
      userId: 'regularUserUid1',
      productId: '3 Month IPTV Plan',
      amount: 29.99,
      currency: 'USD',
      status: 'succeeded',
      method: 'stripe',
      createdAt: new Date(),
      gatewayData: {
        stripeId: 'pi_123456789',
      },
    },
  ]

  for (const payment of payments) {
    await db.collection('payments').add(payment)
    console.log(`Payment for user ${payment.userId} created`)
  }

  // 4. (Optional) Create example subscriptions
  const subscriptions = [
    {
      userId: 'regularUserUid1',
      planId: '3 Month IPTV Plan',
      status: 'active',
      startDate: new Date(),
      endDate: new Date(Date.now() + 3 * 30 * 24 * 60 * 60 * 1000), // 3 months from now
      paymentId: 'pi_123456789',
      createdAt: new Date(),
    },
  ]

  for (const subscription of subscriptions) {
    await db.collection('subscriptions').add(subscription)
    console.log(`Subscription for user ${subscription.userId} created`)
  }

  // 5. (Optional) Create example admin log
  await db.collection('admin_logs').add({
    adminId: 'adminUserUid1',
    action: 'seeded database',
    target: 'all',
    timestamp: new Date(),
    details: { note: 'Initial seed' },
  })

  console.log('Firestore seeding complete!')
}

seedFirestore().catch(console.error)
