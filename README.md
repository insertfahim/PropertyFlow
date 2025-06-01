# 🏠 PropertyFlow - Modern Real Estate Rental Platform

<div align="center">

![Real Estate Platform](https://img.shields.io/badge/Real%20Estate-Platform-blue)
![Next.js](https://img.shields.io/badge/Next.js-15.1.6-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Prisma](https://img.shields.io/badge/Prisma-6.3.0-2D3748)
![AWS](https://img.shields.io/badge/AWS-Cloud-orange)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-336791)

_A comprehensive, full-stack rental property management platform built from the ground up_

[🚀 Live Demo](#) • [📖 Documentation](#features) • [🐛 Report Issues](https://github.com/insertfahim/propertyflow/issues)

</div>

---

## 🌟 Project Showcase

PropertyFlow is a sophisticated, enterprise-grade real estate rental platform that I developed to revolutionize how property managers and tenants interact. This full-stack application combines modern web technologies with intelligent design to create a seamless rental experience.

### ✨ What Makes This Special

🎯 **Dual-Role Architecture** - Carefully crafted separate dashboards for property managers and tenants  
🔐 **Enterprise Authentication** - AWS Cognito integration with role-based access control  
🗺️ **Interactive Maps** - Mapbox integration for property location visualization  
📊 **Real-time Data** - Live updates for applications, payments, and property status  
🎨 **Modern UI/UX** - Beautiful, responsive design with Tailwind CSS and Framer Motion  
⚡ **Performance Optimized** - Server-side rendering, image optimization, and efficient data fetching

---

## 🚀 Features

### 🏢 For Property Managers

-   **Property Management Dashboard** - Comprehensive overview of all managed properties
-   **Application Processing** - Review, approve, or deny rental applications with one-click actions
-   **Tenant Management** - Track current tenants, lease agreements, and payment status
-   **Financial Tracking** - Monitor rental income, payment history, and financial analytics
-   **Property Listing Creation** - Rich property listing creation with photo uploads and detailed information
-   **Communication Hub** - Direct messaging system with tenants
-   **Document Management** - Generate and manage lease agreements and rental documents

### 🏠 For Tenants

-   **Advanced Property Search** - Multi-filter search with location, price, amenities, and property type
-   **Interactive Property Listings** - Detailed property views with photo galleries and virtual tours
-   **Application Submission** - Streamlined rental application process with real-time status tracking
-   **Personal Dashboard** - Manage current residences, applications, and personal information
-   **Payment Management** - View payment history, upcoming payments, and download receipts
-   **Favorites System** - Save and manage favorite properties for easy access
-   **Lease Management** - Access lease documents and track lease terms

### 🌐 Core Platform Features

-   **Intelligent Search** - Location-based search with Mapbox geocoding integration
-   **Real-time Notifications** - Instant updates for application status changes and important events
-   **Responsive Design** - Seamless experience across desktop, tablet, and mobile devices
-   **Multi-media Support** - Advanced photo upload and management system
-   **Data Analytics** - Comprehensive reporting and analytics for property performance
-   **Security First** - Enterprise-grade security with JWT authentication and data encryption

---

## 🛠️ Tech Stack

### Frontend Architecture

-   **Next.js 15.1.6** - React framework with App Router and Server Components
-   **TypeScript** - Type-safe development with full IntelliSense support
-   **Tailwind CSS** - Utility-first CSS framework for rapid UI development
-   **Framer Motion** - Smooth animations and interactive user experiences
-   **Redux Toolkit** - Predictable state management with RTK Query for data fetching
-   **Radix UI** - Headless UI components for accessibility and customization
-   **React Hook Form** - Performant forms with built-in validation
-   **Zod** - Runtime type validation and schema validation

### Backend Infrastructure

-   **Node.js & Express** - Robust server-side architecture
-   **Prisma ORM** - Type-safe database operations with PostgreSQL
-   **PostgreSQL** - Relational database with PostGIS for geographical data
-   **AWS S3** - Scalable file storage for property images
-   **JWT Authentication** - Secure token-based authentication
-   **RESTful API** - Well-structured API endpoints with comprehensive error handling

### Cloud & DevOps

-   **AWS Cognito** - User authentication and authorization service
-   **AWS S3** - Cloud storage for static assets and file uploads
-   **Mapbox API** - Advanced mapping and geocoding services
-   **Prisma Migrations** - Version-controlled database schema management
-   **Environment Configuration** - Secure environment variable management

### Development Tools

-   **ESLint** - Code linting and quality assurance
-   **Prettier** - Code formatting and style consistency
-   **Husky** - Git hooks for pre-commit quality checks
-   **TypeScript Strict Mode** - Enhanced type checking for better code quality

---

## 🏗️ Architecture Overview

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Next.js App   │    │  Express API    │    │   PostgreSQL    │
│                 │    │                 │    │                 │
│  ├─ App Router  │◄──►│  ├─ REST API    │◄──►│  ├─ Prisma ORM  │
│  ├─ TypeScript  │    │  ├─ Auth MW     │    │  ├─ PostGIS     │
│  ├─ Tailwind    │    │  ├─ File Upload │    │  └─ Migrations  │
│  └─ Redux       │    │  └─ Validation  │    │                 │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         │              ┌─────────────────┐              │
         └──────────────►│   AWS Services  │◄─────────────┘
                        │                 │
                        │  ├─ Cognito     │
                        │  ├─ S3 Storage  │
                        │  └─ CloudFront  │
                        └─────────────────┘
```

---

## 📦 Installation & Setup

### Prerequisites

-   Node.js 18+ and npm/yarn
-   PostgreSQL 14+ with PostGIS extension
-   AWS Account for Cognito and S3
-   Mapbox account for mapping services

### 1. Clone the Repository

```bash
git clone https://github.com/insertfahim/propertyflow.git
cd propertyflow
```

### 2. Backend Setup

```bash
cd server
npm install

# Configure environment variables
cp .env.example .env
```

**Server Environment Variables (.env):**

```env
DATABASE_URL="postgresql://username:password@localhost:5432/propertyflow?schema=public"
JWT_SECRET="your-super-secure-jwt-secret"
AWS_ACCESS_KEY_ID="your-aws-access-key"
AWS_SECRET_ACCESS_KEY="your-aws-secret-key"
AWS_S3_BUCKET_NAME="your-s3-bucket-name"
AWS_REGION="us-east-1"
PORT=3001
```

### 3. Database Setup

```bash
# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate dev

# Seed database with sample data
npm run seed
```

### 4. Frontend Setup

```bash
cd ../client
npm install

# Configure environment variables
cp .env.example .env.local
```

**Client Environment Variables (.env.local):**

```env
NEXT_PUBLIC_API_BASE_URL="http://localhost:3001"
NEXT_PUBLIC_AWS_COGNITO_USER_POOL_ID="your-cognito-user-pool-id"
NEXT_PUBLIC_AWS_COGNITO_USER_POOL_CLIENT_ID="your-cognito-client-id"
NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN="your-mapbox-access-token"
```

### 5. Launch the Application

```bash
# Start the backend server (from server directory)
npm run dev

# Start the frontend application (from client directory)
npm run dev
```

Visit `http://localhost:3000` to access the application! 🎉

---

## 📱 Usage Examples

### Property Manager Workflow

1. **Sign up** as a manager through the authentication system
2. **Add properties** using the comprehensive property creation form
3. **Manage applications** from the dedicated applications dashboard
4. **Track tenants** and monitor payment status in real-time
5. **Generate reports** and download lease agreements

### Tenant Experience

1. **Browse properties** using advanced search filters
2. **Save favorites** and compare different options
3. **Submit applications** with real-time status tracking
4. **Manage residences** and view payment history
5. **Communicate** directly with property managers

### Key User Interactions

-   **Search by location** with autocomplete and map integration
-   **Filter properties** by price range, bedrooms, amenities, and more
-   **Real-time application status** updates with email notifications
-   **Interactive property galleries** with high-resolution images
-   **One-click favorites** management with persistent storage

---

## 📁 Project Structure

```
propertyflow/
├── client/                          # Next.js Frontend Application
│   ├── src/
│   │   ├── app/                     # App Router Pages
│   │   │   ├── (auth)/             # Authentication Pages
│   │   │   ├── (dashboard)/        # Protected Dashboard Routes
│   │   │   │   ├── managers/       # Property Manager Dashboard
│   │   │   │   └── tenants/        # Tenant Dashboard
│   │   │   ├── (nondashboard)/     # Public Pages
│   │   │   │   ├── landing/        # Landing Page Components
│   │   │   │   └── search/         # Property Search & Details
│   │   │   ├── globals.css         # Global Styles
│   │   │   ├── layout.tsx          # Root Layout Component
│   │   │   └── page.tsx            # Home Page
│   │   ├── components/             # Reusable UI Components
│   │   │   ├── ui/                 # Base UI Components
│   │   │   ├── ApplicationCard.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Navbar.tsx
│   │   │   └── ...
│   │   ├── lib/                    # Utility Functions
│   │   ├── state/                  # Redux Store Configuration
│   │   └── types/                  # TypeScript Type Definitions
│   ├── public/                     # Static Assets
│   └── package.json
├── server/                         # Express.js Backend API
│   ├── src/
│   │   ├── controllers/            # API Route Controllers
│   │   ├── middleware/             # Authentication & Validation
│   │   ├── routes/                 # API Route Definitions
│   │   └── index.ts               # Server Entry Point
│   ├── prisma/                    # Database Configuration
│   │   ├── schema.prisma          # Database Schema
│   │   ├── migrations/            # Database Migrations
│   │   └── seedData/              # Sample Data for Development
│   └── package.json
└── README.md                      # Project Documentation
```

---

## 🚀 Deployment

### Production Environment Setup

#### Backend Deployment (AWS EC2/Railway/Heroku)

```bash
# Build the application
npm run build

# Start production server
npm start
```

#### Frontend Deployment (Vercel/Netlify)

```bash
# Build for production
npm run build

# The application is ready for deployment
```

### Environment Configuration

-   Configure production database with connection pooling
-   Set up AWS S3 bucket with proper CORS policies
-   Configure AWS Cognito for production domain
-   Update Mapbox settings for production usage
-   Implement proper logging and monitoring

### Performance Optimizations

-   Enable Next.js Image Optimization for property photos
-   Implement proper caching strategies for API responses
-   Use CDN for static asset delivery
-   Configure database connection pooling
-   Implement rate limiting for API endpoints

---

## 🤝 Contributing

I welcome contributions to make PropertyFlow even better! Here's how you can contribute:

### Development Guidelines

1. **Fork the repository** and create a feature branch
2. **Follow the coding standards** established in the project
3. **Write comprehensive tests** for new functionality
4. **Update documentation** for any API changes
5. **Submit a pull request** with a clear description

### Code Style

-   Use TypeScript for all new code
-   Follow the established ESLint configuration
-   Write meaningful commit messages
-   Ensure proper error handling and validation

### Feature Requests

Have an idea for a new feature? [Open an issue](https://github.com/insertfahim/propertyflow/issues) with:

-   Clear description of the feature
-   Use cases and benefits
-   Possible implementation approach

---

## 📧 Contact & Support

**Developer:** Fahim  
**Email:** faahim06@gmail.com  
**GitHub:** [@insertfahim](https://github.com/insertfahim)

### Get Help

-   🐛 **Bug Reports:** [Submit an issue](https://github.com/insertfahim/propertyflow/issues)
-   💡 **Feature Requests:** [Start a discussion](https://github.com/insertfahim/propertyflow/discussions)
-   📧 **Direct Contact:** faahim06@gmail.com

### Project Status

This project is actively maintained and continuously improved. I regularly update dependencies, fix bugs, and add new features based on user feedback.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

### Technologies & Tools

-   **Next.js Team** - For the amazing React framework
-   **Prisma** - For the excellent database toolkit
-   **Tailwind CSS** - For the utility-first CSS framework
-   **AWS** - For reliable cloud infrastructure
-   **Mapbox** - For sophisticated mapping capabilities
-   **Vercel** - For seamless deployment experience

### Design Inspiration

-   Modern rental platforms and real estate websites
-   Material Design principles and accessibility guidelines
-   User experience best practices from leading tech companies

---

<div align="center">

**Built with ❤️ by Fahim**

_Transforming the real estate rental experience through technology_

[![GitHub](https://img.shields.io/badge/GitHub-Follow-black?style=for-the-badge&logo=github)](https://github.com/insertfahim)
[![Email](https://img.shields.io/badge/Email-Contact-red?style=for-the-badge&logo=gmail)](mailto:faahim06@gmail.com)

</div>
