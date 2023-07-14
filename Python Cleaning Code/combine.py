# import os
# import pandas as pd

# def combine_excel_files(folder_path, output_filename):
#     # Get a list of all the Excel files in the folder
#     excel_files = [f for f in os.listdir(folder_path) if f.endswith('.xlsx') or f.endswith('.xls')]

#     # Initialize an empty dataframe
#     combined_df = pd.DataFrame()

#     # Loop through the files and append them to the combined dataframe
#     for file in excel_files:
#         df = pd.read_excel(os.path.join(folder_path, file))
#         combined_df = combined_df.append(df, ignore_index=True)

#     # Write the combined dataframe to a new Excel file
#     combined_df.to_excel(output_filename, index=False)

# # Use the function
# combine_excel_files('Data_Spreadsheets', 'combined_file.xlsx')



import os
import pandas as pd

def combine_excel_files(folder_path, output_filename):
    # Get a list of all the Excel files in the folder
    excel_files = [f for f in os.listdir(folder_path) if f.endswith('.xlsx') or f.endswith('.xls')]

    # Sort the excel_files list in descending order based on the year in the filename
    excel_files.sort(key=lambda f: int(f.split('.')[0]), reverse=True)

    # Initialize an empty dataframe
    combined_df = pd.DataFrame()

    # Loop through the files and append them to the combined dataframe
    for file in excel_files:
        df = pd.read_excel(os.path.join(folder_path, file))
        combined_df = combined_df.append(df, ignore_index=True)

    # Write the combined dataframe to a new Excel file
    combined_df.to_excel(output_filename, index=False)

# Use the function
combine_excel_files('Data_Spreadsheets', 'combined_file.xlsx')
