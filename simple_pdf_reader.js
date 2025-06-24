#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

async function readPDF(filePath, options = {}) {
    try {
        // Check if file exists
        if (!fs.existsSync(filePath)) {
            throw new Error(`File not found: ${filePath}`);
        }

        // Read the PDF file
        const dataBuffer = fs.readFileSync(filePath);
        
        // Parse the PDF
        const data = await pdf(dataBuffer, options);
        
        return {
            success: true,
            file: filePath,
            totalPages: data.numpages,
            text: data.text,
            metadata: data.metadata || {},
            info: data.info || {}
        };
    } catch (error) {
        return {
            success: false,
            file: filePath,
            error: error.message
        };
    }
}

async function readPDFPage(filePath, pageNumber) {
    try {
        const result = await readPDF(filePath);
        if (!result.success) {
            return result;
        }

        // Split text by pages (approximation - pdf-parse doesn't separate pages cleanly)
        const lines = result.text.split('\n');
        const totalLines = lines.length;
        const linesPerPage = Math.ceil(totalLines / result.totalPages);
        
        const startLine = (pageNumber - 1) * linesPerPage;
        const endLine = pageNumber * linesPerPage;
        
        const pageText = lines.slice(startLine, endLine).join('\n');
        
        return {
            success: true,
            file: filePath,
            page: pageNumber,
            totalPages: result.totalPages,
            text: pageText,
            metadata: result.metadata,
            info: result.info
        };
    } catch (error) {
        return {
            success: false,
            file: filePath,
            error: error.message
        };
    }
}

// Command line interface
async function main() {
    const args = process.argv.slice(2);
    
    if (args.length === 0) {
        console.log('Usage: node simple_pdf_reader.js <pdf_file> [page_number]');
        console.log('Examples:');
        console.log('  node simple_pdf_reader.js "pdfs/Building Effective AI Agents - Anthropic.pdf"');
        console.log('  node simple_pdf_reader.js "pdfs/Building Effective AI Agents - Anthropic.pdf" 1');
        process.exit(1);
    }
    
    const filePath = args[0];
    const pageNumber = args[1] ? parseInt(args[1]) : null;
    
    console.log(`📖 Reading PDF: ${filePath}`);
    
    if (pageNumber) {
        console.log(`📄 Extracting page ${pageNumber}...`);
        const result = await readPDFPage(filePath, pageNumber);
        
        if (result.success) {
            console.log(`\n✅ Success!`);
            console.log(`📊 Total pages: ${result.totalPages}`);
            console.log(`📄 Page ${result.page} content:`);
            console.log('─'.repeat(50));
            console.log(result.text.substring(0, 1000) + (result.text.length > 1000 ? '...' : ''));
            console.log('─'.repeat(50));
        } else {
            console.log(`❌ Error: ${result.error}`);
        }
    } else {
        console.log(`📄 Extracting full text...`);
        const result = await readPDF(filePath);
        
        if (result.success) {
            console.log(`\n✅ Success!`);
            console.log(`📊 Total pages: ${result.totalPages}`);
            console.log(`📝 Text preview (first 500 characters):`);
            console.log('─'.repeat(50));
            console.log(result.text.substring(0, 500) + '...');
            console.log('─'.repeat(50));
            console.log(`\n📋 Metadata:`);
            console.log(JSON.stringify(result.metadata, null, 2));
        } else {
            console.log(`❌ Error: ${result.error}`);
        }
    }
}

// Export functions for use as module
module.exports = { readPDF, readPDFPage };

// Run CLI if called directly
if (require.main === module) {
    main().catch(console.error);
} 