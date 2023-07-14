import pandas as pd

# Define the CPI data
cpi_data = {
    2002: 179.9,
    2003: 184,
    2004: 188.9,
    2005: 195.3,
    2006: 201.6,
    2007: 207.3,
    2008: 215.303,
    2009: 214.537,
    2010: 218.056,
    2011: 224.939,
    2012: 229.594,
    2013: 232.957,
    2014: 236.736,
    2015: 237.017,
    2016: 240.007,
    2017: 245.12,
    2018: 251.107,
    2019: 255.657,
    2020: 258.811,
    2021: 270.97,
    2022: 292.655
}

# Load the Excel file
df = pd.read_excel('20 Years Wage and Employment Statistics.xlsx')  # replace 'your_file.xlsx' with your actual file name

# Add the CPI column
df['CPI'] = df['YEAR'].map(cpi_data)

# Save the DataFrame back to the Excel file
df.to_excel('20 Years Wage and Employment Statistics.xlsx', index=False)
