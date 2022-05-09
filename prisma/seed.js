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

    const mission1 = await prisma.mission.upsert({
      where: { name: 'missionA' },
      update: {},
      create: {
        name: 'missionA',
        lang: 'elixir',
        mission: 'saturn',
        missionCommander: 'Carlo',
        enrollments: 5,
        hasCertification: true
      },
      
    });

    const mission2 = await prisma.mission.upsert({
      where: { name: 'missionB' },
      update: {},
      create: {
        name: 'missionB',
        lang: 'python',
        mission: 'mars',
        missionCommander: 'Fernanda',
        enrollments: 6,
        hasCertification: false
      },
    });

    const mission3 = await prisma.mission.upsert({
      where: { name: 'missionC' },
      update: {},
      create: {
        name: 'missionC',
        lang: 'CSS',
        mission: 'venus',
        missionCommander: 'Rodrigo',
        enrollments: 4,
        hasCertification: true
      },
    });

    console.log('Create 3 explorers');
    console.log('Create 3 missions');

  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }

  
})();

