# Software Quality Engineering - System Testing

This is a repository for the system-testing assignment of the Software Quality Engineering course at the [Ben-Gurion University](https://in.bgu.ac.il/), Israel.

## Assignment Description

In this assignment, we tested an open-source software called **OpenCart** (https://www.opencart.com/).

OpenCart is an e-commerce platform that provides a shopping cart system with a wide range of features.

## Installation

To install OpenCart and set up the testing environment, follow these steps:

### 1️. Install Required Software

* Download and install XAMPP to set up a local Apache and MySQL server
* Install Google Chrome for Selenium WebDriver testing
* Install Maven to manage dependencies
* Install Java JDK 17+

### 2️. Set Up OpenCart Locally

* Download OpenCart from the official GitHub repository or from OpenCart's website
* Extract the OpenCart files into `C:/xampp/htdocs/opencart`
* Start **Apache** and **MySQL** from the XAMPP control panel
* Navigate to `http://localhost/phpmyadmin/` and create a new database (e.g., `opencart_db`)
* Go to `http://localhost/opencart/install/` and follow the setup wizard
* After installation, delete the `/install` folder as recommended

### 3. Set Up Testing Environment

* Clone this repository:

```bash
git clone https://github.com/BGU-SE-Courses/2025-mbt-g.git
cd 2025-mbt-g
```

* Open the project in an IDE like IntelliJ IDEA or Eclipse
* Add Selenium dependencies in `pom.xml`:

```xml
<dependencies>
    <dependency>
        <groupId>org.seleniumhq.selenium</groupId>
        <artifactId>selenium-java</artifactId>
        <version>4.27.0</version>
    </dependency>
</dependencies>
```

* Install dependencies:

```bash
mvn clean install
```

## What We Tested

We tested the **checkout process and product availability** in OpenCart. Our focus was on the following user stories:

### User Story 1: Customer adds an item to checkout

**Preconditions:**
* A registered customer is logged in
* The customer is on the home page

**Steps:**
1. The customer selects a product
2. The customer proceeds to checkout

**Expected Outcome:**
* The item is successfully added to checkout

### User Story 2: Admin updates a product's availability

**Preconditions:**
* The admin is logged into the OpenCart admin panel

**Steps:**
1. The admin changes the **Date Available** of a product to a future date
2. The customer tries to view the product

**Expected Outcome:**
* The admin successfully updates the **Date Available** field
* The product becomes **hidden** from customers until the specified date

## How We Tested

We used two different testing methods:
1. [Cucumber](https://cucumber.io/), a behavior-driven testing framework.
2. [Provengo](https://provengo.tech/), a story-based testing framework.

Each of the testing methods is elaborated in its own directory. 

## Results

Our test results showed that:
* The checkout process works as expected
* Admin can successfully update product availability
* Customers cannot see products that are set to be available in the future

## Detected Bugs

No bugs were detected.
