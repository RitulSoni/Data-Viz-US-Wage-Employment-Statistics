import pandas as pd
import numpy as np

# Load the Excel file
df = pd.read_excel('20 Years Wage and Employment Statistics.xlsx')  # replace 'your_file.xlsx' with your actual file name

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

# List of columns to be adjusted
cols_to_adjust = ['H_PCT10', 'H_PCT25', 'H_MEDIAN', 'H_PCT75', 'H_PCT90',
                  'A_PCT10', 'A_PCT25', 'A_MEDIAN', 'A_PCT75', 'A_PCT90', 
                  'H_MEAN', 'A_MEAN']

base_year_cpi = cpi_data[2022]  # base year is 2022

# Adjust for inflation
for col in cols_to_adjust:
    df[col] = df[col].apply(lambda x: np.nan if isinstance(x, str) and '*' in x else x)  # replace '*' with NaN
    df[col] = df[col].replace('#', np.nan)  # replace '#' with NaN
    df[col] = df[col].astype(float)  # convert column to float
    df[col] = (df[col] / df['CPI']) * base_year_cpi

# Save the DataFrame back to the Excel file
df.to_excel('Adjusted 20 Years Data.xlsx', index=False)
