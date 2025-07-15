require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('./utils/database');

const seedCoordinators = async () => {
  try {
    await connectDB();
    
    const Coordinator = require('./models/Coordinator');
    
    // Clear existing data (optional - uncomment if you want to reset data)
    // await Coordinator.deleteMany({});
    // console.log('Existing coordinators deleted');
    
    console.log('Checking for existing coordinators...');
    const count = await Coordinator.countDocuments();
    console.log(`Found ${count} existing coordinators`);
    
    if (count === 0) {
      console.log('No coordinators found, seeding data...');
      await Coordinator.insertMany([
        {
          name: "Sarah Johnson",
          location: "New York, NY",
          price: 2500,
          profilePhoto: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300",
          bio: "Experienced wedding coordinator with 8+ years specializing in elegant city weddings.",
          rating: 4.8,
          reviewCount: 127,
          specialties: ["City Weddings", "Luxury Events", "Destination"],
          phone: "(555) 123-4567",
          email: "sarah@example.com"
        },
        {
          name: "Michael Chen",
          location: "Los Angeles, CA",
          price: 3200,
          profilePhoto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300",
          bio: "Creative coordinator known for unique outdoor and beach wedding experiences.",
          rating: 4.9,
          reviewCount: 89,
          specialties: ["Beach Weddings", "Outdoor Events", "Photography"],
          phone: "(555) 987-6543",
          email: "michael@example.com"
        },
        {
          name: "Emily Rodriguez",
          location: "Miami, FL",
          price: 2800,
          profilePhoto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300",
          bio: "Bilingual coordinator specializing in multicultural celebrations and tropical venues.",
          rating: 4.7,
          reviewCount: 156,
          specialties: ["Multicultural", "Tropical", "Bilingual Services"],
          phone: "(555) 456-7890",
          email: "emily@example.com"
        }
      ]);
      console.log('Sample data seeded successfully');
    } else {
      console.log('Seeding skipped - data already exists');
    }
    
    console.log('Seeding process complete');
    process.exit(0);
  } catch (error) {
    console.error('Error during seeding:', error);
    process.exit(1);
  }
};

seedCoordinators();