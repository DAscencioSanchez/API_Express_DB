const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const woopa = await prisma.explorer.upsert({
      where: { name: 'Woopa' },
      update: {},
      create: {
        name: 'Woopa',
				username: 'ajolonauta',
				mission: 'Node'
      },
    });

    const woopa1 = await prisma.explorer.upsert({
      where: { name: 'Woopa1' },
      update: {},
      create: {
        name: 'Woopa1',
				username: 'ajolonauta1',
				mission: 'Node'
      },
    });

    const woopa2 = await prisma.explorer.upsert({
      where: { name: 'Woopa 2' },
      update: {},
      create: {
        name: 'Woopa 2',
				username: 'ajolonauta2',
				mission: 'Java'
      },
    });

    const woopa3 = await prisma.explorer.upsert({
      where: { name: 'Woopa 3' },
      update: {},
      create: {
        name: 'Woopa 3',
				username: 'ajolonauta3',
				mission: 'Node'
      },
    });
    console.log('Create 3 explorers');

    const mission1 = await prisma.mission.upsert({
      where: { name: 'missionA' },
      update: {},
      create: {
        name: 'woopi1',
        lang: 'elixir',
        mission: 'missionA',
        missionCommander: 'Carlo',
        enrollments: 5,
        hasCertification: true
      },

    });

    const mission2 = await prisma.mission.upsert({
      where: { name: 'missionB' },
      update: {},
      create: {
        name: 'woopi2',
        lang: 'python',
        mission: 'missionB',
        missionCommander: 'Fernanda',
        enrollments: 6,
        hasCertification: false
      },
    });

    const mission3 = await prisma.mission.upsert({
      where: { name: 'missionC' },
      update: {},
      create: {
        name: 'woopi3',
        lang: 'CSS',
        mission: 'missionC',
        missionCommander: 'Rodrigo',
        enrollments: 4,
        hasCertification: true
      },
    });

    
    console.log('Create 3 missions');

  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }

  
})();


(async function main() {
 
})();