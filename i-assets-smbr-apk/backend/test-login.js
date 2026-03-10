const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');
const p = new PrismaClient();

async function fix() {
  const newHash = await bcrypt.hash('admin123', 12);
  console.log('New hash:', newHash);
  const updated = await p.user.update({
    where: { username: 'admin' },
    data: { password: newHash },
  });
  console.log('Password updated for:', updated.username);

  // Verify
  const match = await bcrypt.compare('admin123', updated.password);
  console.log('Password match:', match);
  await p.$disconnect();
}

fix().catch(console.error);
